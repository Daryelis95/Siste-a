<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/lib/fonts/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="/lib/fonts/ionicons/css/ionicons.min.css">
        <link rel="stylesheet" href="/css/popeye.css">
        <link rel="stylesheet" href="/css/angular-toastr.min.css">
        @yield('custom-style')
        <link rel="stylesheet" href="/lib/styles/main.css">
        <title>UNEFA</title>
    </head>
    <body>
        <main ng-app="app">
            <div id="preloader" ng-if="!$pageFinishedLoading"></div>
            <div ng-if="$pageFinishedLoading" ng-class="{ 'menu-collapsed': $superSidebarService.isMenuCollapsed() }">
                <super-sidebar ng-class="{ 'menu-collapsed': $superSidebarService.isMenuCollapsed() }"></super-sidebar>
                <super-header title="'UNEFA'" token="'{{csrf_token()}}'"></super-header>
                <div class="al-main">
                    <div class="al-content">
                        <div class="content-top clearfix">
                            <h1 class="al-title">{{$title}}</h1>
                            <ul class="breadcrumb al-breadcrumb">
                                <li>
                                    <a href="/dashboard">Home</a></li>
                                <li>
                                    <span>{{$title}}</span>
                                </li>
                            </ul>
                        </div>
                        @yield('content')
                    </div>
                </div>
            </div>
        </main>
        
        <script src="/lib/scripts/lib/jquery.min.js"></script>
        <script src="/lib/scripts/lib/angular.js"></script>
        <script src="/lib/scripts/lib/angular-animate.js"></script>
        <script src="/lib/scripts/lib/ui-bootstrap.min.js"></script>
        <script src="/lib/scripts/lib/smart-table.min.js"></script>
        <script src="/lib/scripts/lib/sortable.min.js"></script>
        <script src="/lib/scripts/lib/popeye.min.js"></script>
        <script src="/js/angular-toastr.tpls.min.js"></script>
        
        <script src="/lib/scripts/menu.js"></script>
        <script src="/lib/scripts/superUtil.js"></script>
        <script src="/lib/scripts/theme/theme.module.js"></script>
        <script src="/lib/scripts/theme/zoomIn.js"></script>
        <script src="/lib/scripts/components/msgCenter/msgCenter.js"></script>
        <script src="/lib/scripts/components/superSidebar/superSidebar.js"></script>
        <script src="/lib/scripts/components/superSidebar/superSidebar.service.js"></script>
        <script src="/lib/scripts/components/superSidebar/superSidebarHelpers.directive.js"></script>
        <script src="/lib/scripts/components/superPanel/superPanel.module.js"></script>
        <script src="/lib/scripts/components/super-header/super-header.js"></script>
        <script src="/lib/scripts/components/superTable/superTable.js"></script>
        <script src="/lib/scripts/components/superInputs/superInputs.js"></script>
        <script src="/lib/scripts/components/modalSave/modalSave.js"></script>
        <script src="/lib/scripts/components/cardSetting/cardSetting.js"></script>

        <script src="/lib/scripts/auth.service.js"></script> 

        <script src="/lib/scripts/main.js"></script> 
        @yield('custom-script')
        
    </body>
</html>