import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RootNode } from '../../models/strapi-content.model';
import { StrapiRendererComponent } from './strapi-renderer.component';

const createImage = (url: string): RootNode =>
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
      createImage('https://example.com/a.png'),
      createImage('https://example.com/b.png'),
    ]);
    fixture.componentRef.setInput('prioritizeFirstImage', prioritizeFirstImage);
    fixture.detectChanges();
    return Array.from(fixture.nativeElement.querySelectorAll('img'));
  };

  it('always renders an alt text, falling back to the caption', () => {
    const fixture = TestBed.createComponent(StrapiRendererComponent);
    const withCaption = createImage('https://example.com/c.png') as unknown as { image: { caption: string } };
    withCaption.image.caption = 'Team photo';
    fixture.componentRef.setInput('content', [withCaption, createImage('https://example.com/d.png')]);
    fixture.detectChanges();

    const alts = Array.from<HTMLImageElement>(fixture.nativeElement.querySelectorAll('img')).map(img => img.getAttribute('alt'));
    expect(alts).toEqual(['Team photo', '']);
  });

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
