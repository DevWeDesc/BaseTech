import { Injectable } from '@angular/core';
import { userType } from '../types/userType';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  private usersMock: userType[] = [
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
      name: 'Facebook',
      typeAccont: 'Influencer',
      posts: [
        {
          id: 1,
          image:
            'https://turbologo.com/articles/wp-content/uploads/2019/08/facebook-old-logo-.png',
          content: 'Postagem Facebook',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
      ],
    },
    {
      id: 2,
      image:
        'https://cdn.ome.lt/poE-jjZ9Rj9zTr_AGh1MfxX9AS0=/1200x630/smart/extras/conteudos/twitter_novo_logo_x.webp',
      name: 'Twitter',
      typeAccont: 'Influencer',
      posts: [
        {
          id: 1,
          image:
            'https://turbologo.com/articles/wp-content/uploads/2019/08/facebook-old-logo-.png',
          content: 'Postagem Facebook',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
      ],
    },
    {
      id: 3,
      image:
        'https://startse-uploader.s3.us-east-2.amazonaws.com/bill_gates_bf300e3975.jpg',
      name: 'Bill Gates',
      typeAccont: 'Influencer',
      posts: [
        {
          id: 1,
          image:
            'https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg',
          content: 'Jeff Bezos',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
      ],
    },
    {
      id: 4,
      image:
        'https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg',
      name: 'Jeff Bezos',
      typeAccont: 'Influencer',
      posts: [
        {
          id: 1,
          image:
            'https://turbologo.com/articles/wp-content/uploads/2019/08/facebook-old-logo-.png',
          content: 'Postagem Facebook',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
      ],
    },
    {
      id: 5,
      image:
        'https://assets-global.website-files.com/62e89931273b5c21be76c486/645ab5e23e609fa71c69927a_mark-zuckerberg-fundador-facebook-meta.jpg',
      name: 'Mark Zuckerberg',
      typeAccont: 'Influencer',
      posts: [
        {
          id: 1,
          image:
            'https://turbologo.com/articles/wp-content/uploads/2019/08/facebook-old-logo-.png',
          content: 'Postagem Facebook',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
      ],
    },
  ];

  getUsersMock(): Observable<userType[]> {
    return of(this.usersMock);
  }
}
