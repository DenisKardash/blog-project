# Области хранения данных:

- база данных на JSON Server
- BFF - расшифровывается как `Backend For Frontend` - бэкенд для фронтенда
- Redux Store на клиенте.

# Сущности приложения и место для хранения их данных:

- `Пользователь`:
  БД (весь список), BFF (сессия текущего), Redux Store (отображение в браузере)
- `Роль пользователя`:
  БД (весь список), BFF (сессия текущего пользователя),
  Redux Store (отображение в браузере)
- `Статья`:
  БД (весь список), Redux Store (отображение в браузере)
- `Комментарий`:
  БД (весь список), Redux Store (отображение в браузере)

# Таблицы БД и их схемы:

- Пользователи (users): - `id` / `login` / `password` / `registered_at` / `role_id`
- Роли (roles): - `id` / `name`
- Статьи (posts): - `id` / `title` / `image_url` / `content` / `published_at`
- Комментарии (comments): - `id` / `author_id` / `post_id` / `content`

ВОЗМОЖНО ПОЗЖЕ ДОБАВИМ ЕЩЕ ТАБЛИЦЫ

# Схема состояния на BFF.

- сессия текущего пользователя: `login` / `password` / `role`

# Схема для Redux Store.

- user: - `id` / `login` / `roleId` / `session` (session добавили позднее)
- posts: массив post: - `id` / `title` / `imageUrl` / `publishedAt` / `commentsCount`
- post: - `id` / `title` / `imageUrl` / `content` / `publishedAt` /
- comments: массив comment: - `id` / `author` / `content` / `publishedAt`
- users: массив user: - `id` / `login` / `registeredAt` / `role`
