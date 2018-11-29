drop table if exists weekdays, users, shifts, admin;

create table weekdays (
    id serial not null primary key,
    week_days text not null
);


create table admin (
    id serial not null primary key,    
    email text not null UNIQUE,
    FullName text not null,
    role text not null,    
    password text not null
);

create table users (
    id serial not null primary key,
    email text not null UNIQUE,
    FullName text not null,
    role text not null,    
    password text not null
);

create table shifts (
    id serial not null,
    user_id int not null,
    days_id int not NULL,
    FOREIGN key (user_id) REFERENCES users(id),
    FOREIGN key (days_id) REFERENCES weekDays(id)
);


insert into weekDays(id,week_days) values (1,'Monday');
insert into weekDays(id,week_days) values (2,'Tuesday');
insert into weekDays(id,week_days) values (3,'Wednesday');
insert into weekDays(id,week_days) values (4,'Thursday');
insert into weekDays(id,week_days) values (5,'Friday');
insert into weekDays(id,week_days) values (6,'Saturday');
insert into weekDays(id,week_days) values (7,'Sunday');