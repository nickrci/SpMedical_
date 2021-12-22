import "../../assets/css/estiloHome.css"
import Cabecalho from "../../components/cabecalho/cabecalho"
import Rodape from "../../components/rodape/rodape"



export default function Home() {
    return (
        <div>
            <Cabecalho />


            {/* <!-- home --> */}

<div id="home" class="home">
    <div class="home_box">
        <div class="home_box_txt">
            <a>Trabalhamos para o melhor na sua saúde</a>
            <div class="home_box_txt2">
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.   
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
            </div>
        </div>
    </div>
    
</div>

{/* <!-- SERVICES --> */}
<div id="services" class="services"> 
<a class="busca">O que está procurando ?</a>
<div class="services_column">
    <div class="serv_block">
        <div class="serv_box">
            <a href="/login">Consultas</a>
        </div>
    </div>
    <div class="serv_block">
        <div class="serv_box">
            <a href="#">Especialidades</a>
        </div>
    </div>
</div>

</div>


{/* <!-- Sobre --> */}

<div id="sobre_nos" class="about_us">
    <div class="about_us_txt">
        <a>sobre nós</a>
        <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
        </span>
    </div>
</div>

<div id="Especialidades" class="especialidades">

    <a>Especialidades</a>
    <div class="lista">
        <ul>
            <li>Cardiologia</li>
            <li>Radioterapia</li>
            <li>Pediatria</li>
            <li>Angiologia</li>
            <li>Cirurgia geral</li>
        </ul>
    </div>
    <div class="lista">
        <ul>
            <li>Dermatologia</li>
            <li>Urologia</li>
            <li>Psiquiatria</li>
            <li>Anestesiologia</li>
            <li>Cirurgia cardiovascular</li>
        </ul>
    </div>


            <Rodape />

        </div>
        </div>
        
        
    )
}