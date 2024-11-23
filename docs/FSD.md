# FSD (Feature-Sliced Design)

Архитектурная методология для фронтенд проектов

[![FSD Link](https://img.shields.io/badge/Link-FSD-2b74d4)](https://feature-sliced.design/ru/)

> Тут ключевое слово методология, что дает нам больше конкретики чем абстрактную архитектуру,
> типа чиста архитектура, DRY, KiSS, SOLID и ...
> Но прежде чем начать изучать далее эту методологию стоит повторить вот что:
>
> - [DRY (Don't Repeat Yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
> - [KISS (Keep It Simple, Stupid)](https://en.wikipedia.org/wiki/KISS_principle)
> - [SOLID](https://en.wikipedia.org/wiki/SOLID)
>   - S — Single Responsibility Principle
>   - O — Open/Closed Principle - используем в основном в Shared layer
>   - L — Liskov Substitution Principle
>   - I — Interface Segregation Principle
>   - D — [Dependency Inversion Principle](https://medium.com/@ruben.alapont/solid-principles-series-the-dependency-inversion-principle-dip-in-typescript-424a9cb0820e) - это в FSD используется хорошо и надо понять как с этим работать в коде
> - [DDD (Domain-Driven Design)](https://en.wikipedia.org/wiki/Domain-driven_design) - feature слои мы должны этот принцип соблюдать
> - [YAGNI (You Aren’t Gonna Need It)](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
> - [GRASP (General Responsibility Assignment Software Patterns)](<https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)>) - Low coupling поддерживается в FSD активно.
> - [CQS (Command Query Separation)](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation)
> - [OOP (Объектно-ориентированное программирование)](https://www.typescriptlang.org/docs/handbook/classes.html) - парадигма программирования нужно понять и уметь писать в этом стили, потому что код пишем в Typescript

## Shared

- Модули должны быть стабильными (тут постараться реализовать Open/Close из SOLID)
- Можно кросс импорты
- не должно содержать бизнес логику
- Можно определить интерфейсы и контексты что реализуется выше слоями
- Избегаем инверсию зависимости

## Entities

- Первую очередь надо понять, это абстрактный слой бизнеса
- Кросс импорт на этом слои нельзя
- Связь реализовать на верхнем уровне
- Определить тут store
- Лучше реализовать фабрики (Factory) чем Singleton
- Активно использовать [слоты](https://habr.com/ru/articles/518500/) и [render props](https://react.dev/reference/react/Children#calling-a-render-prop-to-customize-rendering)

## Features

- Реализуем именно бизнес фичу, что бы не получить [high cohesion](<https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)#High_cohesion>)
- Нельзя импортировать друг друга (иногда лучше копипаста чем связанность фичи что убирает связанность)
- Реализуется use cases
- Действие над приложением в терминах бизнеса (например, как называем пользователя: user, employee, student ...)
- Реализовать ["Кричащая архитектура"](https://habr.com/ru/articles/747210/)
- Отображения реализуются в каждом use case (формы, кнопки (бизнесовая логика у этой кнопки), модалки)
- Группируем похожие фичи в папку. Например: auth/sign-in, auth/sign-out

## Widgets / Pages

- Widget и Page по сути почти одинаковые, но если мы без изменения можем использовать widget в нескольких страницах, тогда создаем widget
- Слои отображение, комбенируем тут отображения и логику из слоев ниже
- Плоская структура
- Кросс импорт на этом слои нельзя
- Может содержать логики отображения
- Реализовать ["Кричащая архитектура"](https://habr.com/ru/articles/747210/)
- НЕ должно содержать бизнес логику
- НЕстабильные модули (часто меняются и по этому бизнес логику и другие моменты которые описали выше не должно содержаться тут)

## App

- Запускает наш app
- Глобальная композиция и логика
- Не импортируется ниоткуда
- Меняется очень часто
- Глобальные данные компонуем и реализуем тут, а ниже по слоям описываем и определяем
