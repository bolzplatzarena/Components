import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RootNode } from '../../models/strapi-content.model';
import { StrapiRendererComponent } from './strapi-renderer.component';

const image = (url: string): RootNode =>
  ({
    type: 'image',
    image: { name: url, url, width: 100, height: 50, hash: url, ext: '.png', mime: 'image/png', size: 1, provider: 'local', createdAt: '', updatedAt: '' },
    children: [{ type: 'text', text: '' }],
  }) as unknown as RootNode;

describe('StrapiRendererComponent', () => {
  // the missing <link rel="preconnect"> warning is irrelevant in tests
  beforeEach(() => TestBed.configureTestingModule({ providers: [{ provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://example.com' }] }));

  const render = (prioritizeFirstImage: boolean): HTMLImageElement[] => {
    const fixture = TestBed.createComponent(StrapiRendererComponent);
    fixture.componentRef.setInput('content', [
      { type: 'paragraph', children: [{ type: 'text', text: 'intro' }] },
      image('https://example.com/a.png'),
      image('https://example.com/b.png'),
    ]);
    fixture.componentRef.setInput('prioritizeFirstImage', prioritizeFirstImage);
    fixture.detectChanges();
    return Array.from(fixture.nativeElement.querySelectorAll('img'));
  };

  it('loads all images lazily by default', () => {
    expect(render(false).map(img => img.getAttribute('loading'))).toEqual(['lazy', 'lazy']);
  });

  it('prioritizes only the first image', () => {
    const [first, second] = render(true);

    expect(first.getAttribute('loading')).toBe('eager');
    expect(first.getAttribute('fetchpriority')).toBe('high');
    expect(second.getAttribute('loading')).toBe('lazy');
  });
});
