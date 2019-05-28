
window._genesys.widgets.bus.command('App.registerExtension', {
    name: 'CustomExtension', extension: function ($, CXBus, Common) {
        'use strict';
 
        // Register the plugin.
        var service = CXBus.registerPlugin('CustomExtension');
 
        // Subscribe to the App.ready event so we can react to it.
        service.subscribe('WebChatService.ready', function (e) {
            
            setRoutingContexts([{
                'context': 'skill1',
                'category': 'skills'
            },
            {
                'context': 'skill2',
                'category': 'skills'
            }]);
            

            console.log('[777] Ready');
            setAdditionalAttributes({
                'attribute1': 'value1',
                'attribute2': 'value2'
            });
            

            
            setNotes({
                'notes': 'This is an Interaction Note.'
            });
            

            
            setBotCustomParameters({
                'customKey': 'customValue'
            });
            
        });
 
        // Set routing contexts for PureConnect.  Note that this must be called before a chat is started.
        function setRoutingContexts(payload) {
            service.command('WebChatService.setChatRoutingContexts', payload);
        }
 
        // Set additional Interaction Attribute for PureConnect.  Note that this must be called before a chat is started.
        function setAdditionalAttributes(payload) {
            service.command('WebChatService.setChatAdditionalAttributes', payload);
        }
 
        // Set an Interaction Note for PureConnect.  Note that this must be called before a chat is started.
        function setNotes(payload) {
            service.command('WebChatService.setChatNotes', payload);
        }

        // Set custom parameters to be sent to a Bot Provider.  Currently only GIA is supported for this.
        function setBotCustomParameters(payload) {
            service.command('WebChatService.setBotCustomParameters', payload);
        }
}});
