import { ResolveFn, Routes, UrlSegment } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { OtherComponent } from './other/other.component';
import { SecondComponent } from './second/second.component';
import { ProfileComponent } from './profile/profile.component';

const resolvedChildTitle: ResolveFn<string> = () =>
  Promise.resolve('child other');

export const routes: Routes = [
  { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'first-component',
    title: 'first',
    component: FirstComponent,
    children: [
      { path: 'other', title: resolvedChildTitle, component: OtherComponent },
    ],
  },
  { path: 'second-component', title: 'second', component: SecondComponent },
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {
          consumed: url,
          posParams: { username: new UrlSegment(url[0].path.slice(1), {}) },
        };
      }
      return null;
    },
    component: ProfileComponent,
  },
  { path: '**', component: NoPageFoundComponent }, // Wildcard route for a 404 page
];
