/*
 * codegrabber-highlightjs
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

codegrabber.Hooks.register({
    name: 'codegrabber-highlightjs',

    run : function run (element) {
        hljs.highlightBlock(element);
    }
});