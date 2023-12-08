import { Injectable } from '@angular/core';
import { userType } from '../types/userType';
import { EMPTY, Observable, of } from 'rxjs';

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
            'https://static.poder360.com.br/2023/07/prismada-passaro-azul-x-logo-twitter-848x477.jpg',
          content: 'Twitter',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
        {
          id: 2,
          image:
            'https://static.poder360.com.br/2023/07/prismada-passaro-azul-x-logo-twitter-848x477.jpg',
          content: 'Twitter',
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
            'https://startse-uploader.s3.us-east-2.amazonaws.com/bill_gates_bf300e3975.jpg',
          content: 'Bill Gates',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
        {
          id: 2,
          image:
            'https://startse-uploader.s3.us-east-2.amazonaws.com/bill_gates_bf300e3975.jpg',
          content: 'Bill Gates',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
        {
          id: 3,
          image:
            'https://startse-uploader.s3.us-east-2.amazonaws.com/bill_gates_bf300e3975.jpg',
          content: 'Bill Gates',
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
            'https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg',
          content: 'Jeff Bezos',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
        {
          id: 2,
          image:
            'https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg',
          content: 'Jeff Bezos',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
        {
          id: 3,
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
      id: 5,
      image:
        'https://assets-global.website-files.com/62e89931273b5c21be76c486/645ab5e23e609fa71c69927a_mark-zuckerberg-fundador-facebook-meta.jpg',
      name: 'Mark Zuckerberg',
      typeAccont: 'Influencer',
      posts: [
        {
          id: 1,
          image:
            'data:image/jpeg;base64,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',
          content: 'Postagem Facebook',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },

        {
          id: 3,
          image:
            'data:image/jpeg;base64,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',
          content: 'Postagem Facebook',
          coments: [
            { accont: 'Instagram', content: 'Conteúdo muito Bom!', id: 1 },
          ],
        },
        {
          id: 2,
          image:
            'data:image/jpeg;base64,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',
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

  getUserForId(id: number): Observable<userType | undefined> {
    const userMockForID = this.usersMock.find((user) => user.id == id);
    if (userMockForID) {
      console.log(`User for ID: ${userMockForID}`);
      return of(userMockForID);
    } else {
      console.log(`User not found for ID: ${id}`);
      return EMPTY;
    }
  }
}
