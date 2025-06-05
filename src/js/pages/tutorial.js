"use strict";

const pageContent = document.querySelector(".page-content");

const content = `<div class="grid-container">
  <div
    class="intro-quote intro-quote--vertical-spacing col-start-1 col-end-5 col-start-sm-2 col-end-sm-6 col-start-md-2 col-end-md-6"
  >
    У языка есть свой ритм,<br />свои правила, свои тенденции.<br />Подчинись
    им.
  </div>
</div>

<section class="manual-section grid-container">
  <div
    class="manual-section__pic col-start-1 col-end-5 col-end-sm-9 col-start-md-2 col-end-md-6 col-end-lg-7"
    data-lazyload="lazy"
  ></div>
  <div
    class="manual-section__content right-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-7 col-start-md-6 col-end-md-10 col-start-lg-8 col-end-lg-12 col-end-xxl-11"
  >
    <div class="heading-h1">
      <h1>Учебник <span class="subheading">испанского языка</span></h1>
    </div>
    <p>
      Учебник-самоучитель испанского языка создан для тех, кто начинает учить
      испанский язык с нуля и не имеет языкового образования. Сложные
      лингвистические механизмы объясняются понятными словами.
    </p>
  </div>
</section>

<div class="grid-container">
  <div
    class="link-btn link-btn--neutral col-start-1 col-end-5 col-start-sm-2 col-end-md-5"
  >
    <div class="link-btn__svg"></div>
    <p class="link-btn__text">Предисловие</p>
  </div>
</div>

<div class="grid-container tutorial-module-links">
  <div
    class="text-link tutorial-module-links__link col-start-1 col-end-3 col-start-sm-2 col-end-sm-4 col-start-md-3 col-end-md-6 col-start-lg-4 col-end-lg-7"
  >
    <a href="#"
      ><div class="text-link__main">Модуль I</div>
      <span class="sublink">для начинающих</span></a
    >
  </div>
  <div
    class="text-link tutorial-module-links__link right-block-margin-md col-start-3 col-end-5 col-start-sm-5 col-end-sm-8 col-start-md-6 col-end-md-9 col-start-lg-8 col-end-lg-11"
  >
    <a href="#">
      <div class="text-link__main">Модуль II</div>
      <span class="sublink">для продолжающих</span></a
    >
  </div>
</div>

<div class="separator grid-container">
  <hr
    class="col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-10 col-end-lg-12"
  />
</div>

<section class="tutorial-about-section grid-container">
  <h2 class="col-start-1 col-end-5 col-start-sm-2 col-end-sm-8">
    О чём этот учебник
  </h2>
  <div
    class="tutorial-about-section__text col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-6 col-end-lg-7 ol-end-xxl-6"
  >
    <p>
      Этот учебник представляет собой подробное руководство по испанской
      грамматике и лексике, а каждый урок является элементом богатой системы
      языка. Знания, полученные в каждом уроке нужны, чтобы пройти каждый
      последующий урок. Продвигайся последовательно и учись на результат.
    </p>
    <p>
      Учебник испанского языка поделён на два условных уровня — модуля. Каждый
      модуль состоит из 20 разделов по 3 урока. Чтобы выучить и закрепить один
      урок потребуется, как минимум, один день.
    </p>
  </div>
  <div
    class="tutorial-about-section__text right-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-6 col-end-md-10 col-start-lg-8 col-end-lg-12"
  >
    <p>
      В учебнике представлена актуальная грамматика и лексика испанского языка
      Испании. Особенностям испанского языка Латинской Америки будут посвящены
      отдельные уроки.
    </p>
    <p>
      Блокнот, тетрадь и гаджет — продолжение твоей памяти. Обязательно
      используй пишущие принадлежности и делай конспекты, чтобы твои знания
      оставались на бумаге или в твоём девайсе. Храни свои знания бережно!
    </p>
  </div>
</section>
`;

pageContent.insertAdjacentHTML("beforeend", content);
