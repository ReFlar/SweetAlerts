<?php

/**
 *  This file is part of reflar/sweetalerts.
 *
 *  Copyright (c) 2018 .
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace Reflar\SweetAlerts\Listeners;

use DirectoryIterator;
use Flarum\Event\ConfigureLocales;
use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets
{

    /**
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'configureWebApp']);
        
    }
    
    /**
     * Modifies the client view for forum/admin.
     *
     * @param ConfigureWebApp $event
     */
    public function configureWebApp(ConfigureWebApp $event)
    {
        if ($event->isAdmin()) {
            $event->addAssets([
                __DIR__.'/../../js/admin/dist/extension.js',
                __DIR__.'/../../resources/less/admin.less'
            ]);
            $event->addBootstrapper('reflar/sweetalerts/main');
        }

        if ($event->isForum()) {
            $event->addAssets([
                __DIR__.'/../../js/forum/dist/extension.js',
                __DIR__.'/../../resources/less/app.less'
            ]);
            $event->addBootstrapper('reflar/sweetalerts/main');
        }
    }
    
}
