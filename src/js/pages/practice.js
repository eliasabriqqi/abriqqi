"use strict";

const pageContent = document.querySelector(".page-content");

const content = `<div class="grid-container"></div>

<div class="grid-container practice-page__vertical-spacing">
  <div
    class="practice-page__heading col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-7"
  >
    <div class="">
      <div class="heading-h1">
        <h1>Практика<br /><span class="subheading">испанского</span></h1>
      </div>
      <div class="heading-attch">
        <p>С автором abriqqi.com</p>
      </div>
    </div>
  </div>
  <div
    class="phone-num-tag col-start-md-7 col-end-md-10 col-start-lg-8 col-end-lg-12"
  >
    <div class="whatsapp-icon"></div>
    <p class="phone-num">+7(999)720-97-67</p>
  </div>
</div>

<div class="practice-first-block grid-container">
  <p
    class="right-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12"
  >
    Учить испанский без практики – неполноценно, а общаться с официантом в
    ресторане – это не практика. Тебе нужен друг, с которым ты можешь
    говорить на испанском целый час и делиться событиями из жизни. Если у
    тебя такого друга нет, я могу побыть в его роли.
  </p>
  <div
    class="practice-video__pic col-start-1 col-end-5 col-end-sm-9 col-start-md-2 col-end-md-6"
    id="lazy"
  ></div>
</div>

<div class="practice-price grid-container">
  <ul class="col-start-1 col-end-5 col-start-sm-2 col-end-sm-9">
    <li class="col-start-md-2 col-end-md-5">Длительность: 1 час</li>
    <li class="right-block-margin-md col-start-md-5 col-end-md-8 col-start-lg-6 col-end-lg-12">
      Стоимость: 3000 руб
    </li>
  </ul>
</div>

<div class="practice-second-block grid-container">
  <div
    class="practice-second-block__text col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-11 col-end-lg-13"
  >
    <h3 class="left-block-margin-md col-start-md-1 col-end-md-5">
      Поподробнее, <br /><span class="subheading">пожалуйста</span>
    </h3>
    <div class="left-block-margin-md col-start-md-1 col-end-md-5">
      <p>
        Если ты учишь испанский по моему учебнику и желаешь пообщаться на
        испанском, давай выйдем на связь.
      </p>
      <p>
        Я предлагаю индивидуальные разговорные онлайн встречи. Это хорошая
        возможность практиковать испанский язык.
      </p>
    </div>
  </div>
  <div
    class="practice-second-block__pic col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12"
    id="lazy"
  ></div>
</div>

<div class="practice-third-block grid-container">
  <div class="practice-third-block__text col-start-1 col-end-5 col-start-sm-2 col-end-md-6">
    <h4>За час можно:</h4>
    <ul>
      <li>общаться на разные темы</li>
      <li>тренировать конкретный урок</li>
      <li>объяснить сложную тему</li>
    </ul>
  </div>
  <div
    class="right-block-margin-md col-start-1 col-end-5 col-start-sm-5 col-end-sm-8 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12"
  >
    <h4>Ты получишь:</h4>
    <ul>
      <li>консультацию по обучению</li>
      <li>дополнительные учебные материалы</li>
    </ul>
  </div>
</div>

<div class="grid-container">
  <div class="main-btn practice__main-btn col-start-1 col-end-5 col-start-sm-2 col-end-sm-8">
    <div class="whatsapp-icon--green"></div> 
    <p>Напиши мне</p>
  </div>
</div>

<div class="separator grid-container">
  <hr
    class="col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-10 col-end-lg-12"
  />
</div>

<section class="application-form application-form--practice grid-container">
  <div class="application-form__text-block right-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-6 col-end-md-10 col-start-lg-8 col-end-lg-12">
    <h3 class="application-form__heading">
      Хочешь</br> учить испанский</br> с abriqqi.com?
    </h3>
    <p class="application-form__text">
      Напиши нам о своём желании, и мы обязательно тебе поможем. Укажи свой
      уровень и предпочтения по расписанию. Оставь свои контакты, чтобы
      можно было выйти на связь в самое ближайшее время.
    </p>
  </div>
  <div class="application-form__input-block col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-6 col-end-lg-7">
    <input type="email" class="application-form__email-input" placeholder="e-mail" />
    <textarea class="application-form__text-field" placeholder="Оставь свои пожелания и контакты"></textarea>
  </div>
  <div class="application-form__submit col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-6 col-end-lg-7">
    <input type="submit" class="application-form__btn" value="Отправить" />
  </div>
</section>`;

pageContent.insertAdjacentHTML("beforeend", content);
