import { Component, EventEmitter,  Output,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { Configuration, ExpandedLTR, SlideInOut } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [SlideInOut, ExpandedLTR]
})

export class NavigationComponent {
  @Output() menutoggle = new EventEmitter();
  @Output() mousetoggle = new EventEmitter();

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  
  isMenuClosed = false;
  isExpanded = true;
  isShowing = false;
  showSubmenu: boolean = false;  
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (this.isMenuClosed) {
      this.isShowing = true;
      this.mousetoggle.emit();
    }
  }

  mouseleave() {
    if (this.isMenuClosed) {
      this.isShowing = false;
      this.mousetoggle.emit();
    }
  }

  closeNavmenu() {
    //this.isExpanded=!this.isExpanded;
    this.isMenuClosed = this.isMenuClosed ? false : true;
    this.menutoggle.emit();
  }

  name = 'Angular';
  appitems = [
    {
      label: 'Quick Access',
      faIcon: 'icon-quick-access',
      class: 'level-1',
      items: [
        {
          label: 'Dashboard',
          link: '/quick-access/dashboard',
          faIcon: 'icon-dashboard'
       },
       {
          label: 'Recent',
          link: '/recent',
          faIcon: 'icon-recent',

        },
        {
          label: 'My Favorites',
          link: '/my-favorites',
          faIcon: 'icon-my-favourites'
        }, 
        {
          label: 'Shared',
          link: '/shared',
          faIcon: 'icon-shared'
        },
        {
          label: 'Trash',
          link: '/trash',
          faIcon: 'icon-trash'
        }
      ]
     },
    {
      label: 'Repositories',
      class: 'level-1',
      faIcon: 'icon-repository',
      items: [
        {
          label: 'Repository 1',
          link: '/repository',
          faIcon: 'icon-repository',
        },
        {
          label: 'Repository 2',
          link: '/repository2',
          faIcon: 'icon-repository',
        },
        {
          label: 'Repository 3',
          link: '/repository3',
          faIcon: 'icon-repository',
        },
      ]
    },  
    {
      label: 'Repository Administration',
      class: 'level-1',
      faIcon: 'icon-manage-repository',
      tooltip: 'Repository Administration',
      items: [
        {
          label: 'Manage Repository',
          link: '/repo-admin',
          faIcon: 'icon-manage-repository'
        },
      ]
    },
    {
      label: 'Tenant Administration',
      class: 'level-1',
      faIcon: 'icon-manage-repository',
      tooltip: 'Tenant Administration',
      items: [
        {
          label: ' Manage Repository',
          link: '/tenant-repo-admin',
          faIcon: 'icon-manage-repository'
        },
      ]
    },
    /***Below items should  be removed */
    {
      label: 'Templates',
      class: 'level-1',
      faIcon: 'icon-template',
      tooltip: '',
      items: [
        {
          label: 'List View',
          link: '/template/list-view',
          faIcon: 'icon-template'
        },
        {
          label: 'Card View',
          link: '/template/card-view',
          faIcon: 'icon-template'
        },
        {
          label: 'Form Entry',
          link: '/template/form-entry',
          faIcon: 'icon-template'
        },
        {
          label: 'Breadcrumb',
          link: '/template/breadcrumb',
          faIcon: 'icon-template'
        },
        {
          label: 'Page Title',
          link: '/template/page-title',
          faIcon: 'icon-template'
        },
        {
          label: 'Empty Message',
          link: '/template/empty-message',
          faIcon: 'icon-template'
        },
        {
          label: 'Modal Dialogs',
          link: '/template/modal-dialogs',
          faIcon: 'icon-template'
        },
       
       
      ]
    },
    /***above will be removed */
    {
      label: '',
      faIcon: '',
      class: 'left-nav-devider',
    },
    {
      label: 'Notifications',
      faIcon: 'icon-notification',
      class: 'level-1 responsive-menu',
    },
    {
      label: 'Help',
      faIcon: 'icon-help',
      class: 'level-1 responsive-menu',
    },
    {
      label: '',
      faIcon: '',
      class: 'left-nav-devider',
    },
    {
      label: 'SP',
      // faIcon: 'icon-person' show a icon when user doesn't upload an photo,
      faIcon: 'icon-profile-photo',
      class: 'level-1 responsive-menu',
      items: [
        {
          label: 'Edit Profile',
          link: '/edit-profile',
          faIcon: 'icon-edit',
          class: 'responsive-menu',
       },
       {
        label: 'Change Password',
        link: '/change-password',
        faIcon: 'icon-change-password',
        class: 'responsive-menu',
       },
        {
          label: 'Sign Out',
          link: '/Signout',
          faIcon: 'icon-logout',
          class: 'responsive-menu',
       },
      ]
    },  
  ];

  config: Configuration = {
    paddingAtStart: false,
    interfaceWithRoute: true,
    classname: 'app-sidemenu',
    useDividers: false,
    highlightOnSelect: true,
    collapseOnSelect: false,
    rtlLayout: false,
    customTemplate: true
  };

  getClass(item: any) {
      return {
          [item.faIcon]: true
      }
  }

  constructor(private router: Router) {}

  ngOnInit() { 
    const url = this.router.url;
    console.log('Route Url is: '+ url);

    if(url === '/') {
      
    }
  }
}