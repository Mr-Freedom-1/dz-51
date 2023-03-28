import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], search: string): any[] {
    if(!search.trim()){
      return users.sort((a, b) => a.name.localeCompare(b.name))
    }    
    return users.filter(user => user.name.includes(search)).sort((a, b) => a.name.localeCompare(b.name))
  }
}