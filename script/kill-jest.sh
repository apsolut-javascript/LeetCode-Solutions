#/bin/bash

ps aux | grep "jest" | head -n1 | cut -d' ' -f13 | xargs kill

