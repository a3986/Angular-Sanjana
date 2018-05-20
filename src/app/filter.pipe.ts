import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
    transform(items: any[], base: string): any {
        if (base === 'all') { return items } else
            return items.filter(item => {
                return item.base === base;
            });
    }
}