import { Pipe, PipeTransform } from "@angular/core";
import { reverse } from "dns";

@Pipe(
    {name: 'reverse',
    standalone: true
    }
)

export class ReversePipe implements PipeTransform{
    transform(value: any) {
        return value.split('').reverse().join('');
    }
}