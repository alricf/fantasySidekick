
FPL API base URL: https://fantasy.premierleague.com/api/

Endpoints  
1. General Information: https://fantasy.premierleague.com/api/bootstrap-static/
- Object with array key values besides game_settings which is an object
- events (current season gameweek stats), teams (team id/name), elements (player stats), element_types (player position id)

2. Fixtures: https://fantasy.premierleague.com/api/fixtures/
- Array with object values
- fixture information (event/gameweek, id/fixture stats/identifier/fixture with team + element/player stat)

3. Player's Detailed Data: https://fantasy.premierleague.com/api/element-summary/{element_id}/
- element_id or player_id (refer to elements key in #1 in this list) i.e: 3
- Object with array key values
- fixtures (future fixture player data), history (current season player stats per gameweek), history_past (past seasonal player stats overall)

4. Gameweek Live Data: https://fantasy.premierleague.com/api/event/{event_id}/live/
- event_id or gameweek_id (refer to events key in #1 in this list)
- Object with 1 array key value
- elements (player data per event_id or gameweek_id)

5. Manager/User Basic Information: https://fantasy.premierleague.com/api/entry/{manager_id}/
- manager_id can be verified through the fpl url in the points section.
- object with single values besides leagues key which is an object.
- leagues (all manager league data)

6. Manager/User’s History: https://fantasy.premierleague.com/api/entry/{manager_id}/history/
- manager_id can be verified through the fpl url in the points section.
- object with array key values
- current (current seasonal gameweek data), past (past seasonal data), chips (current seasonal chip usage data)

7. Classic League Standings: https://fantasy.premierleague.com/api/leagues-classic/{league_id}/standings
- league_id can be verified through the fpl url in the Leagues & Cups section.
- object with object key values besides last_updated_data which is a date/time value.
- league (classic league information i.e. name), standings (information about managers in the league i.e. rank)

8. My Team (authentication required): https://fantasy.premierleague.com/api/my-team/{manager_id}/
- manager_id can be verified through the fpl url in the points section.
- Object with 2 array key values and 1 array key value
- picks (current season list of players picked by manager), chips (current season chips status), transfers (current season information about last transfer)

9. Manager/User’s Team Per Gameweek: https://fantasy.premierleague.com/api/entry/{manager_id}/event/{event_id}/picks/