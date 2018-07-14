// file my_extension/main.js

define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {

        var handler = function () {            
            var answer = confirm ("This is an on-line help for Coding Teacher Jupyter extension. To open the help in the new window - click OK.")
            if (answer)
                window.open(
                    'https://codingteacher.herokuapp.com/help/',
                    '_blank' // <- This is what makes it open in a new window.
                );


        };

        var action = {
            icon: 'fa-comment-o', // a font-awesome class used on buttons, etc
            help    : 'On-line help',
            help_index : 'zz',
            handler : handler
        };
        var prefix = 'my_extension';
        var action_name = 'show-alert';

        var full_action_name = Jupyter.actions.register(action, action_name, prefix); // returns 'my_extension:show-alert'
        Jupyter.toolbar.add_buttons_group([full_action_name]);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});