# J'accroche +

## Application en React JS utilisant Supabase comme Backend

Cette application a pour but d'offrir une gamme de cours particuliers destinés à des enfants situation scolaire difficile dans la région Bastiaise en Haute Corse.

## Développement

- Afin de mettre en place l'application j'ai utilisé **Vite** qui s'est chargé d'installer React JS.
- Pour le backend j'ai créé deux tables de données **Postgres** avec **Supabase**, Courses et Users.
- Le CSS de l'application est réalisé avec **Tailwind CSS** afin d'avoir une rapidité et une simplicité dans la mise en place du style.
-

### Courses :

- id avec uuid
- title type text
- created_at type date
- updated_at type date
- description type text
- price type int8
- date type date
- hours type time
- user type relation avec la table users -> users.id

### Users :

- id avec int8 en auto-incrementation
- name type varchar
- created_at type date
- updated_at type date
- phone_number type text
- postale_code type text
- email type text
- adress type text
- city type varcher
- course type relation avec la table courses -> courses.id
