import Image from "next/image";
import "@/styles/page/about.css"

export default function About(){
    return(
        <section className="section-about">
            <h2>Quem somos</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum hic corrupti, laboriosam repudiandae numquam placeat doloribus tempore id aliquid eligendi cupiditate nostrum dolorem dolor deserunt recusandae esse quaerat ducimus.
                Tempora quisquam velit suscipit pariatur laboriosam ipsa error placeat, culpa ut ratione, earum quod, quo nisi! Impedit commodi voluptatum recusandae voluptates quod fugiat, ullam dolorum. Laborum illum enim nobis adipisci!
                Atque asperiores cumque itaque aperiam eum, nostrum animi velit quaerat at corporis, deleniti voluptas. Voluptatem soluta eum autem, rem non blanditiis error suscipit, quisquam repellat nesciunt unde sunt laborum tempora!
                Fuga iste accusantium repellendus voluptates atque assumenda facere, maxime possimus quod ipsam illo distinctio modi voluptatibus eaque nihil commodi alias repellat rerum! Distinctio esse quibusdam sed, fugiat accusamus dignissimos in.
                Voluptates, iste? Quibusdam odio iusto cupiditate deserunt tenetur exercitationem culpa fugiat nobis porro aperiam, doloremque perferendis dolores temporibus ea reprehenderit. Ex eius et excepturi non. Temporibus dolor provident alias natus?</p>
                <Image src="/parede.png" alt="agência" width={400} height={500}/>
            </div>
        </section>
    );
}