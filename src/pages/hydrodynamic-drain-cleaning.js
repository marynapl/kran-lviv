import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const CleanPage = () => (
  <Layout>
    <SEO title="Гідродинамічна прочистка каналізації у Львові"
      description="Виконується гідродинамічна прочистка каналізації у Львові. Цілодобово. Телефонуйте!" />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Гідродинамічна прочистка каналізації</h1>
          <p className="lead"><strong>Виконується гідродинамічна прочистка каналізації у Львові. Телефонуйте!</strong>
          </p>
          <p>
            <Call />
          </p>
        </div>
      </div>
    </section>

    <Content>
      <div className="row align-center">
        <div className="columns small-12 medium-11 large-10">
          <p className="text-center"> <strong>Повністю відновлюємо прохідність трубопроводів малих, середніх та великих діаметрів.</strong> Усуваємо залишки засмічень, ліквідованих механічним методом. Не використовуємо шкідливих речовин, не шкодимо навколишньому середовищу. Швидко, якісно, акуратно. Це ми.</p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Як працює гідродинамічна чистка каналізації</h2>
          <p>Очищення каналізаційної системи гідродинамічним способом відновлює працездатність інженерної мережі завдяки водяному потоку поданому у трубопровід під високим тиском.</p>
          <p>Спеціальний шланг вводиться у трубу соплом на глибину близько 50-70 см. Підключається агрегат. Після включення тиску шланг просувається під дією реактивної тяги, яку генерує помпа. Вона створюється внаслідок перепадів тиску води на виході промивної насадки. При цьому осадові відкладення, засмічення збиваються і відшаровуються. Потужність нарощується поступово, щоб уникнути неприємних наслідків при виникненні гідроудару.</p>
          <p>Просування шланга здійснюється завдяки наявності декількох отворів, розташованих у соплі та спрямованих у бік зворотний руху, під кутом 15-45º до осі виробу. Після проходження певної відстані, як правило такої, що розділяє один-два оглядових колодязя, включенням механізму барабана шланг разом з розмитим засміченням витягується.</p>
          <p>Якщо зустрічається щільне забруднення, слід зворотно-поступальними рухами проштовхувати шланг. Бажаний результат не досягається – треба витягти шланг і замінити насадку.</p>
          <p>Щоб досягти максимальної ефективності необхідно гідродинамікою чистити каналізацію два-три рази. Труби тоді краще прочищаються, нові засмічення утворяться не так швидко.</p>
          <p>Гідродинамічна прочистка каналізації не вимагає значної витрати води. Протягом однієї хвилини для промивки труб звичайно витрачається:</p>
          <ul>
            <li>внутрішньої побутової мережі – 15-20 літрів;</li>
            <li>зовнішньої побутової мережі – 30 л.</li>
          </ul>
          <p>Гідродинамічна промивка каналізації промислових об'єктів пов'язана зі значно більшою витратою води.</p>
          <p>Корисна інформація! <strong>Промивання труб таким методом повністю очищає від піску, мулу, жирових наростів, та від крижаних пробок, що утворюються у трубопроводах.</strong></p>
          <div className="margin-bottom-2x embed-container">
            <iframe src="https://www.youtube-nocookie.com/embed/IFA-xzE8AXM?controls=0&mute=1"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h2>Переваги гідродинамічного очищення каналізації</h2>
          <p>Гідродинаміка у порівнянні з іншими способами має ряд переваг:</p>
          <ul>
            <li>швидкість та висока якість чистки каналізаційної системи;</li>
            <li>виключається можливість пошкодження трубопроводів (у тому числі пластикових);</li>
            <li>висока ефективність при складній конфігурації мереж;</li>
            <li>гідродинамічне прочищення каналізації проводиться при будь-якій температурі, навіть якщо у трубі крижана пробка;</li>
            <li>процес екологічно безпечний.</li>
          </ul>
          <h2>Види апаратів якими робиться гідродинамічна чистка каналізації</h2>
          <h3>Портативні</h3>
          <p>Компактні машинки, які переміщують на візках з колесами. Ними виконується прочищення труб внутрішньої та зовнішньої каналізації. Забір води з центрального водопроводу, або з резервуара (якщо у машинці є функція всмоктування). Можуть бути:</p>
          <ul>
            <li>електричними;</li>
            <li>пропановими (аналогічно бензиновим можуть застосовуватися у польових умовах);</li>
            <li>бензиновими (працюють автономно)</li>
          </ul>
          <h3>Спеціалізовані технічні засоби</h3>
          <p>На базі автомобільного причепу, фургону, або вантажівки. Установка оснащується дизельним, бензиновим, або пропановим двигуном. Щоб забезпечити автономну роботу використовується бак для води.</p>
          <p>Ними проводиться гідродинамічна прочистка трубопроводів великих діаметрів центральної каналізації, зовнішніх мереж.</p>
          <br />
          <p>Комплектація установок для чистки каналізації гідродинамічним способом:</p>
          <ul>
            <li>двигун та насос;</li>
            <li>резервуар для води;</li>
            <li>барабан, довгі шланги;</li>
            <li>насадки (сопла).</li>
          </ul>
          <p>Додатково включаються у комплект:</p>
          <ul>
            <li>інструмент, щоб прочищати насадку;</li>
            <li>металеві рами на колесах для переміщення установки;</li>
            <li>пістолет високого тиску;</li>
            <li>фільтри;</li>
            <li>прилади для регулювання тиску.</li>
          </ul>
          <p>Насадки для прочистки гідродинамікою за способом їх дії поділяють на:</p>
          <ul>
            <li>пробивні,</li>
            <li>роторні.</li>
          </ul>
          <p>Виходячи з характеру забруднення застосовують сопла:</p>
          <ul>
            <li>донні – видаляють зі зливної каналізації дрібні гілки, пісок, листя;</li>
            <li>пробивні, прочищають застаріле щільне засмічення;</li>
            <li>універсальні;</li>
            <li>ланцюгово-карусельні, беруться у важких випадках;</li>
            <li>особливі для проходження вигинів труби, видалення коріння, жирових відкладень.</li>
          </ul>
          <p>Взагалі у побутовій сфері для гідравлічної промивки часто достатньо міні мийки. Такими апаратами користуються автовласники. Для цього необхідно мати гнучкий шланг та насадки.</p>
          <br />
          <p><Link to="/">Kran.lviv</ Link> використовує сучасне обладнання. Прочистка каналізації гідродинамічним методом здійснюється машинами фірми Ridgid (США), Rothenberger та Rems (Германія). У місті Львів та інших населених пунктах області нами проводиться гідродинамічна прочистка каналізаційних труб Ø 50-250 мм.</p>
          <p>Крім основного призначення, гідродинамічні машини застосовуються як апарати високого тиску для миття транспорту, фасадів та інших поверхонь. Це – багатофункціональні пристрої, здатні не тільки успішно справлятися з засмічення, а й виконувати різноманітні додаткові завдання.</p>
          <p>Дзвоніть. <strong>Виконується гідродинамічна прочистка каналізації у Львові 24/7.</strong> Цілодобово та щоденно. Майстер сантехнік оперативно прибуває на об’єкт і прочищає труби. Гарантується позитивний результат.</p>
          <p><Link to="/drain-cleaning">Наші послуги з прочистки каналізації.</ Link></p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default CleanPage
