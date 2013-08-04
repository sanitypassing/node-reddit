/*
 *
 */

var http        = require('http'),
    https       = require('https');


// pass undefined so that we always know that undefined is actually undefined.
(function(undefined) {
    var debug       = true,
    
    // reddit requests that the client User-Agent be something
    // unique. This'll be the default, but there will of course be
    // a way to change it.
    userAgent   = 'User-Agent: node-reddit: a reddit api for node.js';

    // allow the user to set the User-Agent to something other than the default.
    this.UserAgent = function(agentName) { 
        if (typeof agentName != 'string') { 
            // We didn't get a string. Stop because there is nothing more to do.
            if (debug) {
                console.error('UserAgent requires a string.'); 
                return undefined; // prevent the rest of the function from executing.
            }
        }
        
        // if we're made it this far into the function, we know we've got a
        // string, so let's get to work on building a valid User-Agent
        
        var isAgent = agentName.slice(0, 11).toLowerCase() // should be 'User-Agent:'     
        
        // if you gave us 'user-agent:' in the beginning of the string, we'll 
        // just use that, assuming you gave us a perfectly valid user-agent.
        // if you didn't, we'll add it ourselves and continue assuming you
        // gave us a perfectly valid user-agent.
        if (isAgent == 'user-agent:') {
            userAgent = agentName;
        } else {
            userAgent = 'user-agent' + agentName;

            if (debug) { 
                console.info('\'User-Agent:\' was added to UserAgent() to create a valid User-Agent');
            }
        }
    }

    var ToggleDebug = function() {
        if (debug === true) {
            debug = false;
            console.info("Debugging has been disabled");
        } else {
            debug = true;
            console.info("Debugging has been enabled");
        }
    }

    // used internally to make GET/POST requests so that there isn't one
    // massive, hard-to-read function that does it all.
    var _get = function(url) { };
    var _post = function(url) { };
   

    // this should export all non-private members of this function... probably.
    module.exports = this;
})();

