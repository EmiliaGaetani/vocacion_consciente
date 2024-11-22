function evaluarTest() {
    let sociales = 0;
    let informatica = 0;
    let arte = 0;
    let economia = 0;

    let pregunta1 = document.getElementById("r1").value;
    let pregunta2 = document.getElementById("r2").value;
    let pregunta3 = document.getElementById("r3").value;
    let pregunta4 = document.getElementById("r4").value;
    let pregunta5 = document.getElementById("r5").value;
    let pregunta6 = document.getElementById("r6").value;
    let pregunta7 = document.getElementById("r7").value;
    let pregunta8 = document.getElementById("r8").value;

    if (pregunta1 == "si") sociales++;
    if (pregunta2 == "si") informatica++;
    if (pregunta3 == "si") sociales++;
    if (pregunta4 == "si") informatica++;
    else if (pregunta4 == "aveces") economia++;
    if (pregunta5 == "si") sociales++;
    if (pregunta6 == "si") arte++;
    if (pregunta7 == "si") economia++;
    if (pregunta8 == "si") informatica++;
    else if (pregunta8 == "aveces") economia++;

    let resultado = "";
    if (sociales > informatica && sociales > economia && sociales > arte) {
        resultado = "Tu perfil sugiere una orientación hacia el área de Ciencias Sociales. Esto indica que tienes un interés en comprender y analizar la sociedad, los comportamientos humanos y las estructuras políticas, económicas y culturales. Algunas carreras que podrían interesarte incluyen Psicología, Sociología, Trabajo Social, Comunicación Social, Derecho, o Ciencias Políticas. En Argentina, universidades como la Universidad de Buenos Aires (UBA), la Universidad Nacional de La Plata (UNLP), la Universidad Nacional de Córdoba (UNC), y la Universidad Nacional de Rosario (UNR) son opciones destacadas para estudiar estas carreras.";
    } else if (informatica > sociales && informatica > economia && informatica > arte) {
        resultado = "Tu perfil sugiere una orientación hacia el área de Informática o Tecnología. Si tienes una mente lógica y analítica, y disfrutas resolviendo problemas mediante herramientas digitales, esta área podría ser la adecuada para ti. Algunas de las carreras más comunes incluyen Ingeniería en Sistemas, Ciencias de la Computación, Programación, Inteligencia Artificial, y Desarrollo de Software. Para estudiar estas disciplinas en Argentina, instituciones como la UBA, la Universidad Tecnológica Nacional (UTN), la Universidad Nacional del Litoral (UNL), y la Universidad Nacional de San Martín (UNSAM) ofrecen excelentes programas.";
    } else if (economia > sociales && economia > informatica && economia > arte) {
        resultado = "Tu perfil sugiere una orientación hacia el área de Economía o Negocios. Esto puede significar que te atrae la administración de recursos, la toma de decisiones estratégicas y la interpretación de fenómenos financieros y económicos. Algunas opciones de carreras incluyen Economía, Administración de Empresas, Marketing, Contabilidad, o Finanzas. En Argentina, universidades como la UBA, la Universidad Nacional de Córdoba (UNC), la Universidad Nacional de Rosario (UNR), y la Universidad Torcuato Di Tella (UTDT) ofrecen programas destacados en estas áreas.";
    } else if (arte > sociales && arte > informatica && arte > economia) {
        resultado = "Tu perfil sugiere una orientación hacia el área de Artes y Creatividad. Si te atrae la expresión artística, la creación de obras visuales, musicales o escénicas, este camino podría ser perfecto para ti. Carreras como Diseño Gráfico, Bellas Artes, Música, Cine, Teatro, o Fotografía son opciones a considerar. En Argentina, instituciones como la Escuela de Arte de la UBA (FADU), la Universidad Nacional de las Artes (UNA), la Universidad Nacional de La Plata (UNLP) y la Universidad de San Martín (UNSAM) ofrecen programas en estas disciplinas.";
    } else {
        resultado = "Tu perfil es variado y podrías explorar varias áreas para descubrir tu interés. Esto sugiere que tienes una amplia gama de intereses y habilidades, lo cual es excelente para explorar diferentes campos antes de tomar una decisión final. Podrías considerar realizar estudios en áreas interdisciplinarias o combinar distintos enfoques. Algunas universidades como la UBA, la UTDT, la Universidad Nacional de Quilmes (UNQ) y la Universidad Nacional de San Martín (UNSAM) ofrecen programas flexibles donde puedes integrar múltiples disciplinas.";
    }

    document.getElementById("resultado").innerText = resultado;
}

