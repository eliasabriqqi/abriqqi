"use strict";

const pageContent = document.querySelector(".page-content");

const content = `<div class="grid-container">
  <div
    class="brand-signature brand-signature--vertical-spacing col-start-1 col-end-5 col-end-sm-9 col-end-md-11 col-end-lg-13"
  >
    <div class="brand-signature__logo"></div>
    <div class="brand-signature__tagline">здесь учат испанский</div>
  </div>
  </div>
  
  <section class="author-intro grid-container">
  <div
    class="author-intro__pic right-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-6 col-end-md-10 col-start-lg-8 col-end-lg-12 col-end-xxl-11"
  ></div>
  
  <div
    class="col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-2 col-end-md-6 col-start-lg-3 col-end-lg-7"
  >
    <div class="author-intro__name">Илья Швырёв</div>
    <p class="author-intro__author-role">автор abriqqi.com</p>
    <p class="author-intro__text">
      Представь, как в этот момент люди в других странах говорят на
      испанском. Кто-то сидит на летней веранде и делится новостями с
      друзьями, кто-то признаётся в любви на берегу океана, кто-то решает
      дела по телефону. Происходят яркие события, а на фоне звучит испанский
      язык...
    </p>
    <div class="readmore">
      <div class="readmore__content"><p>Представь, что ты знаешь испанский. Тогда ты попадаешь в иную реальность. Хочешь, можешь шумно болтать в тапас-баре или устроиться в фирму в Барселоне, или открыть свою. Ты даже можешь поехать в Перу и понять, что инки роднее, чем казалось. Но пока ты ещё на пороге, а портал закрыт. Сначала выучи грамматику и кучу слов.</p><p>Я здесь, чтобы тебе помочь. Я создаю этот ресурс, чтобы сделать твою учёбу комфортной и особенной. На abriqqi.com учись не для сертификатов, а чтобы почувствовать, как перехватывает дыхание от возможности говорить ещё на одном языке. Скоро уютные улочки услышат твой испанский. ¡Venga, a trabajar!</p></div>
    <div class="readmore-btn__container col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-3 col-end-md-5">
      <div
      class="readmore-btn"
    >
      <div class="readmore-btn__svg"></div>
      <p class="readmore-btn__text">Читать ещё</p>
    </div>
  </div>
    
  </div>
    
  </div>
  </section>
  
  <section class="brand-promo grid-container">
  <div
    class="brand-promo__text-content col-start-1 col-end-5 col-start-sm-2 col-end-sm-7"
  >
    <div class="heading-h1">
      <h1>Испанский язык</h1>
      <div class="subheading">на абриках</div>
    </div>
    <div class="heading-attch">
      <p>Самостоятельно или с учителем</p>
    </div>
  </div>
  <div
    class="brand-promo__video col-start-1 col-end-5 col-end-sm-9 col-end-md-11 col-end-lg-13"
  >
    <div class="video-poster brand-promo__video-poster"  data-lazyload="lazy">
      <div class="play-btn"></div>
      <video src="" data-src="src/assets/video/mainpage-desktop-ru.mp4" class="video--desktop video--hidden" controls></video>
      <video src="" data-src="src/assets/video/mainpage-mobile-ru.mp4" class="video--mobile video--hidden" controls></video>
    </div>
   
  </div>
  </section>
  
  <section class="tutorial-section grid-container">
  <div
    class="tutorial-section__pic col-start-1 col-end-5 col-end-sm-9 col-start-md-2 col-end-md-6 col-end-lg-7" data-lazyload="lazy"
  ></div>
  <div
    class="tutorial-section__content right-block-margin-md col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-6 col-end-md-10 col-start-lg-8 col-end-lg-12 col-end-xxl-11"
  >
    <div class="heading-h2">
      <h2>Учебник</h2>
      <div class="subheading">самоучитель</div>
    </div>
    <p>
      Каждая страница учит строить предложения, которыми говорят испанцы в
      реальной жизни. Если хочешь хорошо разобраться в грамматике и владеть
      свежей лексикой, загляни сюда.
    </p>
    <div class="link-btn">
      <div class="link-btn__svg"></div>
      <p class="link-btn__text">Учебник испанского</p>
    </div>
  </div>
  </section>
  
  <section class="courses-section grid-container">
  <div
    class="courses-section__pic col-start-1 col-end-5 col-end-sm-9 col-start-md-6 col-end-md-10 col-start-lg-7 col-end-lg-12" data-lazyload="lazy"
  ></div>
  <div
    class="courses-section__content col-start-1 col-end-5 col-start-sm-2 col-end-sm-8 col-start-md-2 col-end-md-6"
  >
    <div class="heading-h2">
      <h2>Курсы испанского</h2>
      <div class="subheading">онлайн</div>
      <div class="courses-section__line"></div>
    </div>
    <div class="courses-section__text">
      <p>
        Курсы испанского онлайн ведёт автор этого языкового проекта и
        учебника по испанскому Илья Швырёв.
      </p>
      <p>
        Для курса собраны особые материалы, чтобы уроки проходили активно.
      </p>
    </div>
    <div class="main-btn">курсы испанского онлайн</div>
  </div>
  </section>
  
  <div class="separator separator--homepage grid-container">
  <hr class="col-start-1 col-end-5 col-start-sm-2 col-end-sm-8" />
  </div>
  
  
  <section class="application-form application-form--homepage grid-container">
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
