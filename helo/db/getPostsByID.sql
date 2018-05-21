select * 
from users as u
join posts as p
on u.id = p._userID
where u.id = $1
