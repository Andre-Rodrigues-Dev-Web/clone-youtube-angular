import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './components/top/top.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeThumbnailCardComponent } from './components/youtube-thumbnail-card/youtube-thumbnail-card.component';
import { VideoPlayerComponent } from '../views/video-player/video-player.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

const sharedComponents = [
  TopComponent,
  SidebarComponent,
  YoutubeThumbnailCardComponent
]

const sharedModules = [
  FormsModule,
  RouterModule,
  HttpClientModule
]

@NgModule({
  declarations: [
    ...sharedComponents,
    VideoPlayerComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
