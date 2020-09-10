## Data Model

# Table Relationships:

Users (one) ==> People (many)
People (one) ==> Prayers (many)
People (many) <==> Groups (many)
Prayers (many) <==> Tags (many)

# Table Details:

users:
-id
-name (required)
-email (required, unique value)

people:
-id
-name (required)
-description
-added_date (current date)
-prayed_toggle (boolean, default false)
-user_id (from table Users)

prayers:
-id
-name (required)
-person_id (from table People)

tags:
-id
-name (required)
-user_id (from table Users)

groups:
-id
-name (required)
-user_id (from table Users)

people_groups:
-group_id (from table Groups)
-person_id (from table People)

prayer_tags:
-prayer_id (from table Prayers)
-tag_id (from table Tags)