Sources
- https://medium.com/@frenzelts/fantasy-premier-league-api-endpoints-a-detailed-guide-acbd5598eb19
- https://www.game-change.co.uk/2023/02/10/a-complete-guide-to-the-fantasy-premier-league-fpl-api/

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
- fixtures (future fixture player data), history (current season player stats per gameweek - Chart player statistics vs fixtures), history_past (past seasonal player stats overall)

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
- current (current seasonal gameweek data - home), past (past seasonal data - home), chips (current seasonal chip usage data - top 100 statistics and mini-league statistics chip usage)

7. Classic League Standings: https://fantasy.premierleague.com/api/leagues-classic/{league_id}/standings
- league_id can be verified through the fpl url in the Leagues & Cups section.
- object with object key values besides last_updated_data which is a date/time value.
- league (classic league information i.e. name), standings (information about managers in the league i.e. rank - top 100 statistics rank + entry/manager_id and mini-league statistics entry/manager_id)

8. My Team (authentication required): https://fantasy.premierleague.com/api/my-team/{manager_id}/
- manager_id can be verified through the fpl url in the points section.
- Object with 2 array key values and 1 array key value
- picks (current season list of players picked by manager), chips (current season chips status), transfers (current season information about last transfer)

9. Manager/User’s Team Per Gameweek: https://fantasy.premierleague.com/api/entry/{manager_id}/event/{event_id}/picks/
- manager_id can be verified through the fpl url in the points section.
- event_id or gameweek_id (refer to events key in #1 in this list)
- Object with 2 array key values, 1 object key value and a single key value.
- entry_history (information about gameweek i.e. points), picks (information about gameweek player selection - top 100 statistics and mini-league statistics ownership tables)

List of unique endpoint variables (Entity)
1. element_id (Player)

2. event_id (Current Season Gameweek)

3. manager_id (Manager)

4. league_id (League)

ERD Entities
- Players
- Gameweeks
- Managers
- Leagues
- Statistics
- Graphs
- Fixtures