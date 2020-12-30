import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    public transform(value: any, args: string) {
        if (!value) {
            return;
        }

        if (!args) { // Si args viene vacío, retorno TODOS los amigos 
            return value;
        }

        args = args.toLocaleLowerCase();

        return value.filter(item => {
            return JSON.stringify(item).toLocaleLowerCase().includes(args); //toma un string y checa si incluye la palabra incluida en args
        });
    }
}