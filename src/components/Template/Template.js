import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Template.scss';

@withStyles(s)
class Template extends Component {
  render() {
    return (
      <section className={s.Base}>
        <div className={`${s.Tall} ${s['is-hidden-mobile']}`}>
          <div className={s.Content}>
            <img src="pictures/elegant.jpg" role="presentation" />
          </div>
        </div>
        <div className={s.Tall}>
          <div className={s.Small}>
            <div className={s.Logo}>
              <img src="logo.svg" className={s.Logo} role="presentation" />
              <h1>Coloseum</h1>
              <h2>Budujemy Twoje marzenia</h2>
            </div>
          </div>
          <div className={s.Small}>
            <div className={s.Content}>
              <img src="pictures/cozy.jpg" role="presentation" />
            </div>
          </div>
        </div>

        <div className={s.Tall}>
          <div className={s.Small}>
            <div className={s.Content}>
              <img src="pictures/pool.jpg" role="presentation" />
            </div>
          </div>
          <div className={s.Small}>
            <div className={s.Content}>
              <img src="pictures/bathtub.jpg" role="presentation" />
            </div>
          </div>
        </div>
        <div className={s.Tall}>
          <div className={s.Content}>
            <div className={s.Text}>
              <p>
                Jesteśmy firmą remontowo-wykończeniową i działamy na rynku od 1997 roku.
                Wykonujemy usługi w zakresie kompleksowego wykończenia wnętrz
                oraz wszelkich prac remontowych.
              </p>
              <p>Działamy na terenie całego kraju.</p>
              <p>Zakres wykonywanych usług przez naszą firmę to:</p>
              <ul>
                <li>prace wyburzeniowe</li>
                <li>prace murarskie</li>
                <li>elewacje drewniane budynków</li>
                <li>wylewki podłogowe</li>
                <li>gładzie</li>
                <li>płyty g-k (wyklejanie, ścianki działowe)</li>
                <li>tynkowanie</li>
                <li>malowanie</li>
                <li>montaż płytek ceramicznych, szklanych</li>
                <li>montaż kamienia</li>
                <li>montaż podłóg drewnianych (deski, parkiety)</li>
                <li>montaż podłóg panelowych</li>
                <li>cyklinowanie parkietów (również starych)</li>
                <li>montaż i renowacja schodów drewnianych</li>
                <li>podłogi na legarach</li>
                <li>montaż wykładzin podłogowych</li>
                <li>instalacje elektryczne</li>
                <li>instalacje wodno-kanalizacyjne</li>
                <li>elewacje drewniane domów</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.Wide}>
          <div className={s.Contact}>
            <h2>Chcesz wiedzieć więcej?</h2>
            <p>602 135 210</p>
            <p>biuro@coloseum.pl</p>
          </div>
        </div>

        <div className={s.Tall}>
          <div className={s.Content}>
            <div className={s.Text}>
              <p>Współpracujemy z wykonawcami zajmującymi się:</p>
              <ul>
                <li>dachami</li>
                <li>stolarką okienną i drzwiową</li>
                <li>dociepleniami budynków</li>
                <li>wylewkami</li>
                <li>instalacjami wod.-kan. i c.o.</li>
                <li>instalacjami elektrycznymi (w pełnym zakresie – włącznie z odgromowymi)</li>
                <li>instalacjami alarmowymi (również inteligentne domy)</li>
                <li>meblami kuchennymi, szafami wnękowymi i zabudowami z płyt meblowych</li>
                <li>usługami stolarskimi w zakresie schodów i parapetów</li>
                <li>usługami szklarskimi (ścianki szklane, kabiny prysznicowe szklane)</li>
                <li>aranżacjami terenów zielonych</li>
              </ul>
              <p>Współpracujemy również z projektantami i architektami.</p>
            </div>
            <p className={s.Copyright}>© 2016 Adam Dąbrowski</p>
          </div>
        </div>
        <div className={s.Tall}>
          <div className={s.Small}>
            <div className={s.Content}>
              <img src="pictures/loft.jpg" role="presentation" />
            </div>
          </div>
          <div className={s.Small}>
            <div className={s.Content}>
              <img src="pictures/drawer.jpeg" role="presentation" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Template;
