// Домашнее задание от 30.08 - Знакомство с Реакт
import './style.css'
export const RenderInfo = () => {

    const favoriteProgrammingLangueage = {
        name: 'JavaScriptt',
        shortName: 'JS',
        description: 'JavaScript это язык, который позволяет вам применять сложные вещи на web странице — каждый раз, когда на web странице происходит что-то большее, чем просто её статичное отображение — отображение периодически обновляемого контента, или интерактивных карт, или анимация 2D/3D графики, или прокрутка видео в проигрывателе, и т.д. — можете быть уверены, что скорее всего, не обошлось без JavaScript. Это третий слой слоёного пирога стандартных web технологий, два из которых (HTML и CSS) мы детально раскрыли в других частях учебного пособия.',
        href: 'https://654706.selcdn.ru/loftschool-files/blog/posts/efe2924a534961b62e3fde001f266314_1681206112.png',
        extensions: ['TypeScript', 'React', 'Vue', 'Angular', 'Redux', 'Jquery', 'D3'],
    }


    return (
        <div className='container'>
            <h1 className="render__title">{favoriteProgrammingLangueage.name}</h1>
            <h2 className="render__subtitle">{favoriteProgrammingLangueage.shortName}</h2>
            <p className="render__desc">{favoriteProgrammingLangueage.description}</p>
            <img src={favoriteProgrammingLangueage.href} alt={favoriteProgrammingLangueage.name} width={250} />
            <ul>
                Надстройки над JS:
                {favoriteProgrammingLangueage.extensions.map((item, index) => <li className='render__li' key={index}>{item}</li>)}
            </ul>
        </div>
    )
}


