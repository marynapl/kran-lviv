import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const IndustrialDrainCleaningPage = () => (
  <Layout>
    <SEO title="Прочистка промислової каналізації"
      description="Прочистка промислової каналізації у Львові та області, 
      діаметр до 500 мм" />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Прочистка промислової каналізації</h1>
          <p className="lead"><strong>Прочистка промислової каналізації у Львові та області, 
      діаметр до 500 мм</strong>
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
          <p className="text-center">Прочистка промислової каналізації виконується щоденно у всіх районах міста та області. Дзвоніть. Адже засмічення труб викликає складності як при експлуатації приватного житла, так і у великих промислових спорудах. Справитися з проблемою самотужки не вдається. Та й гарантії якості надають тільки професіонали. <Link to="/">Kran.lviv</Link> (послуги сантехніка) гарантує результативне прочищення труб каналізації діаметром до 500 мм: на підприємствах, промислових об’єктах, у будинках.</p>
          <p className="text-center"><em>Ми виконуємо очищення каналізації в будівлях житлових (квартирах, будинках, котеджах), офісних, бізнес-центрах, в торгово-промислових об'єктах та на виробництвах (цехи, заводи)</em>.</p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Прочистка каналізаційної системи на промислових об’єктах</h2>
          <p>Очищення систем каналізації на підприємствах, заводах, фабриках – одна з головних сфер нашої діяльності. <strong>Ми озброєні обладнанням на прочищення великих труб до 500 мм діаметр</strong>. На прочищення каналізаційних мереж надаємо гарантію, що підтверджує якість прочистки трубопроводів.</p>
          <p>Для ліквідації засмічення у трубах застосовується механічна та гідродинамічна прочистка каналізації. Використовується промислового класу інструмент. <strong>Пропонуємо 100 % успішний результат</strong>.</p>
          <p>Механічна чистка каналізації заводів і фабрик здійснюється при відкладенні у трубах соляних кристалізацій. Це − затверділі скам'янілості, з ними погано справляється гідродинамічна промивка.</p>
          <p>Суть процесу – висвердлювання наростів спеціальними буровими насадками, а далі змивання водяним струменем. Спосіб стовідсотково дозволяє відновити початкову пропускну спроможність стічних трубопроводів.</p>
          <p>Промислові технічні засоби для прочищення зовнішньої каналізації підприємств, функціонують в стічних трубопроводах ⌀ 5-50 см. Перевага сучасних засобів − завжди усуваються засмічення по всій магістральній протяжності, не необроблені ділянки не залишаються.</p>
          <p>Повернемо заводській стічній мережі ефективне функціонування. Позбавимо від проблеми заміни забитих труб.</p>
          <h2>Профілактичне прочищення труб на підприємстві</h2>
          <p>Мережа каналізаційних труб на промислових об'єктах − це досить-таки непроста конструкція, і без кваліфікованої допомоги в її обслуговуванні не обійтися.</p>
          <p>Телефонуйте, щоб замовити сервіс послуги сантехніків − обслуговування каналізації підприємств. Робимо позапланові та планові обслуговування каналізаційних мереж, оперативну чистку засмічень труб. Періодичне прочищення промислової каналізації забезпечує відсутність забруднень і не дає виникнути ситуації, що зупинить виробництво.</p>
          <p>Важливо дотримуватися правила − очищення промислової каналізації виконується і профілактично. Прочистка труб профілактичного характеру повинна відбуватися щорічно: від 1 до 3 разів. Це вбереже власників підприємств від виникнення простоїв і фінансових негараздів через втрату працездатності мережі каналізаційних трубопроводів.</p>
          <br />
          <p>Якщо об'єкту потрібне очищення промислової каналізації, то ми виручимо! Необхідна прочистка труб у квартирі, будинку – це теж до нас. Також здійснюється чистка каналізаційних колодязів, зливових каналізацій. Наші фахівці сантехніки оперативно усунуть будь-які проблеми, і зроблять це на найвищому рівні!</p>
          <p>Прочищення каналізації від Kran.lviv − це:</p>
          <ul>
            <li>оперативність виконання роботи;</li>
            <li>мінімальна кількість бруду;</li>
            <li>використання інноваційного обладнання;</li>
            <li>гарантія збереження цілісності всіх елементів системи;</li>
            <li>виявлення причин появи засмічення і їх усунення;</li>
            <li>гарантія на всі види робіт.</li>
          </ul>
          <p>Телефонуйте у будь-який час. Працюємо щоденно. Прочистка каналізації у Львові та області.</p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default IndustrialDrainCleaningPage