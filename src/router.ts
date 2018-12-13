import App from './App';
import Article from './components/article';
import Articles from './components/articles';
import FriendlyLinks from './components/friendly-links';
import Guestbooks from './components/guestbooks';
import { fetchArticle } from './redux/reducers/article';
import { fetchArticles } from './redux/reducers/articles';
import { fetchCategories } from './redux/reducers/categories';
import { fetchGuestbooks } from './redux/reducers/guestbooks';
import { fetchLinks } from './redux/reducers/links';

const routes: any = [
    {
        asyncData: (store: any) => {
            store.dispatch(fetchCategories());
        },
        component: App,
        path: '/blog',
        routes: [
            {
                asyncData: (store: any, route: any) => {
                    const page = route.query.page;
                    const limit = route.query.limit;
                    const cid = route.query.cid;
                    return store.dispatch(fetchArticles(page, limit, {cid}));
                },
                component: Articles,
                exact: true,
                path: '/blog'
            },
            {
                asyncData: (store: any, route: any) => {
                    const id = route.params.id;
                    return store.dispatch(fetchArticle(id));
                },
                component: Article,
                exact: true,
                path: '/blog/articles/:id'
            },
            {
                asyncData: (store: any, route: any) => {
                    const page = route.query.page;
                    const limit = route.query.limit;
                    const cid = route.query.cid;
                    return store.dispatch(fetchArticles(page, limit, {cid}));
                },
                component: Articles,
                exact: true,
                path: '/blog/articles'
            },
            {

                asyncData: (store: any, route: any) => {
                    const page = route.query.page;
                    return store.dispatch(fetchGuestbooks(page));
                },
                component: Guestbooks,
                exact: true,
                path: '/blog/guestbook'
            },
            {
                asyncData: (store: any, route: any) => {
                    return store.dispatch(fetchLinks());
                },
                component: FriendlyLinks,
                exact: true,
                path: '/blog/links'
            }
        ]
    }
];

export default routes;
