import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AdminLogModule } from './modules/adminlog.module';
import { DashboardModule } from './modules/dashboard.module';
import { ArticleModule } from './modules/article.module';
import { CategoryModule } from './modules/category.module';
import { AboutModule } from './modules/about.module';
import { CommentModule } from './modules/comment.module';
import { DemoModule } from './modules/demo.module';
import { FileModule } from './modules/file.module';
import { MediaModule } from './modules/media.module';
import { RssModule } from './modules/rss.module';
import { LoginModule } from './modules/login.module';
import { UploadModule } from './modules/upload.module';
import { SearchModule } from './modules/search.module';
import { UserModule } from './modules/user.module';
import { RateLimitMiddleware } from './middlewares/rate-limit.middleware';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';

@Module({
    imports: [
        DatabaseModule,
        AdminLogModule,
        DashboardModule,
        ArticleModule,
        CategoryModule,
        AboutModule,
        CommentModule,
        DemoModule,
        FileModule,
        MediaModule,
        RssModule,
        LoginModule,
        UploadModule,
        SearchModule,
        UserModule,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RateLimitMiddleware).forRoutes('api');
    }
}
