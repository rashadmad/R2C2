
import copy from '../data/copyData';

const bulletBox: React.FC<{
    
}> = () => {
        return <fieldset className="mt-5 border border-b-8 border-r-4 border-solid border-sky-500 p-3">
        <legend className="md:text-2xl roboto-bold width-100 font-bold tracking-tight text-sky-500 p-2">
            We Are Tackling
        </legend>
        <div className="roboto-regular flex flex-col gap-2 text-2xl text-sky-500 p-2">
            <ol>
                {copy.obstacles.map((item, index) => (
                    <li className="center"><a key={index}> {item.text}</a></li>
                ))}
            </ol>
        </div>
    </fieldset>;
};

export default bulletBox;

