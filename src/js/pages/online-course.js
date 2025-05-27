"use strict";

const pageContent = document.querySelector(".page-content");

const content = `<div class="grid-container"></div>

<div class="grid-container online-course-heading--vertical-spacing">
  <div
    class="online-course-heading col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-end-md-7"
  >
    <div class="">
      <div class="heading-h1">
        <h1>
          Курсы <br /><span class="subheading">испанского онлайн</span>
        </h1>
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

<div class="grid-container">
  <div
    class="online-course__video col-start-1 col-end-5 col-end-sm-9 col-end-md-11 col-end-lg-13"
  >
    <div class="video-poster online-course__video-poster" id="lazy">
      <div class="play-btn"></div>
      <video
        src=""
        data-src="src/assets/video/offer-desktop.mp4"
        class="video--desktop video--hidden"
        controls
      ></video>
      <video
        src=""
        data-src="src/assets/video/offer-mobile.mp4"
        class="video--mobile video--hidden"
        controls
      ></video>
    </div>
  </div>
</div>

<section class="advantages-section grid-container">
  <div
    class="abriqqi-slider slider--dark col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
  >
    <div
      class="slider-track col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
    >
      <div
        class="slide col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
      >
        <div
          class="slide__text left-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-6"
        >
          <div class="overheading">Илья Швырёв</div>
          <h2>
            Этот проект
            <div class="subheading">– моя мечта</div>
          </h2>
          <p>
            Я пишу учебник и веду курсы испанского онлайн с 2009 года. За
            это время я научил испанскому сотни учеников.
          </p>
        </div>

        <div
          class="abriqqi-slider__pic slider-pic1 col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12"
        ></div>
      </div>
      <div
        class="slide col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
      >
        <div
          class="slide__text left-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-6"
        >
          <div class="overheading">Подробно и понятно</div>
          <h2>
            Онлайн-учебник
            <div class="subheading">испанского</div>
          </h2>
          <p>
            Тысячи учеников получили знания и разобрались в испанском благодаря моему учебнику.
          </p>
        </div>

        <div
          class="abriqqi-slider__pic slider-pic2 col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12"
        ></div>
      </div>
      <div
        class="slide col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
      >
        <div
          class="slide__text left-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-6"
        >
          <div class="overheading">Уникальные материалы</div>
          <h2>
            Так интереснее
            <div class="subheading">учиться</div>
          </h2>
          <p>
            Для курса “Испанский онлайн” я приготовил специальные материалы, с которыми учиться ещё интереснее.
          </p>
        </div>

        <div
          class="abriqqi-slider__pic slider-pic3 col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12"
        ></div>
      </div>
    </div>
    <div class="abriqqi-slider__btn-left"></div>
    <div class="abriqqi-slider__btn-right"></div>
  </div>
</section>

<section class="course-description abriqqi-accordion grid-container">
  <div
    class="abriqqi-accordion__bg col-start-1 col-end-5 col-end-sm-9 col-end-md-11"
  ></div>
  <ul class="abriqqi-accordion__content col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-9 col-start-lg-6 col-end-lg-12">
    <li class="abriqqi-accordion__item">
      <h3 class="abriqqi-accordion__item__heading">1. Описание курса</h3>
      <p class="abriqqi-accordion__item__text">
        Онлайн курсы испанского ведёт автор проекта и учебника Abriqqi.com Илья Швырёв. Это углубленный курс для полного овладения испанским языком. На курсе мы учимся говорить как испанцы. Удобные группы до 4 чел.
      </p>
    </li>
    <li class="abriqqi-accordion__item">
    <h3 class="abriqqi-accordion__item__heading">2. Для кого курс</h3>
      <p class="abriqqi-accordion__item__text">Курс ориентирован на взрослых учеников с любым уровнем испанского. Чтобы учиться на онлайн-курсе, нужен доступ в интернет, камера и микрофон.
      </p>
    </li>
    <li class="abriqqi-accordion__item">
  <h3 class="abriqqi-accordion__item__heading">3. О занятиях</h3>
    <p class="abriqqi-accordion__item__text">Занятия проходят в режиме онлайн непосредственно с преподавателем. На уроках даётся большое количество информации, поэтому мы много общаемся, чтобы усвоилось всё. В курс вовлечены материалы, подготовленные для отработки аспектов языка любой сложности.
    </p>
  </li>
  <li class="abriqqi-accordion__item">
<h3 class="abriqqi-accordion__item__heading">4. Расписание</h3>
  <p class="abriqqi-accordion__item__text">Занятия проходят 2 раза в неделю по 90 минут. Расписание зависит от группы. В заявке укажите Ваш уровень и предпочтительное для Вас расписание.
  </p>

</li>
<li class="abriqqi-accordion__item">
<h3 class="abriqqi-accordion__item__heading">5. Стоимость</h3>
<p class="abriqqi-accordion__item__text">Стоимость одного месяца захватывающего обучения составляет 18000 руб. или 180€ (8 уроков по 90 мин).
</p>
</li>
  </ul>
</section>

<div class="grid-container">
  <div class="main-btn online-course__main-btn col-start-1 col-end-5 col-start-sm-2 col-end-sm-8">
    <div class="whatsapp-icon--green"></div> 
    <p>Напиши мне</p>
  </div>
</div>

<section class="video-proof-section grid-container">
  <div
    class="abriqqi-slider slider--dark col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
  >
    <div
      class="slider-track col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
    >
      <div
        class="slide col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
      >
        <div
          class="slide__text left-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-6"
        >
          <div class="overheading">Мои ученики</div>
          <h2>Валерия</h2>
          <p>Учит испанский 1 год</p>
        </div>

        <div
          class="video-poster abriqqi-slider__pic slider-pic1 col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12"  id="lazy"
        >
        <div class="play-btn"></div>
        <video
        src=""
        data-src="src/assets/video/lera-proof.mp4"
        class="video--desktop video--hidden"
        controls
      ></video>
      <video
        src=""
        data-src="src/assets/video/lera-proof.mp4"
        class="video--mobile video--hidden"
        controls
      ></video>
      </div>
      </div>
      
      <div
        class="slide col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
      >
        <div
          class="slide__text left-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-6"
        >
          <div class="overheading">Мои ученики</div>
          <h2>Евгения</h2>
          <p>Учит испанский 1.5 года</p>
        </div>

        <div
          class="video-poster abriqqi-slider__pic slider-pic2 col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12" id="lazy"
        >
        <div class="play-btn"></div>
        <video
        src=""
        data-src="src/assets/video/zhenya-proof.mp4"
        class="video--desktop video--hidden"
        controls
      ></video>
      <video
        src=""
        data-src="src/assets/video/zhenya-proof.mp4"
        class="video--mobile video--hidden"
        controls
      ></video>
      </div>
      </div>

      <div
        class="slide col-start-1 col-end-5 col-end-sm-9 col-start-md-1 col-end-md-11 col-start-lg-1 col-end-lg-13"
      >
        <div
          class="slide__text left-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-6"
        >
          <div class="overheading">Мои ученики</div>
          <h2>Павел</h2>
          <p>Учит испанский 1.5 года</p>
        </div>

        <div
          class="video-poster abriqqi-slider__pic slider-pic3 col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12" id="lazy"
        >
        <div class="play-btn"></div>
        <video
        src=""
        data-src="src/assets/video/pasha-proof.mp4"
        class="video--desktop video--hidden"
        controls
      ></video>
      <video
        src=""
        data-src="src/assets/video/pasha-proof.mp4"
        class="video--mobile video--hidden"
        controls
      ></video>
      </div>
      </div>
    </div>
    <div class="abriqqi-slider__btn-left"></div>
    <div class="abriqqi-slider__btn-right"></div>
  </div>
</section>

<section class="application-form application-form--online--course grid-container">
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
