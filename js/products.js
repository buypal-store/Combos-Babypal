const PRODUCTS = [
//-------------------------LACTANCIA------------------------
  {
  id: "extractor-inalambrico-s22",
  name: "Extractor Inalámbrico Recargable S22",
  price: 250,
  category: "Lactancia",
  subCategory: "Extractores y Recolector de leche",
  type: "extractor",
  image: "imagenes/Lactancia/EXTRACTOR S22.jpeg",
  highlights: [
    "Modos y niveles: 3 modos y 9 niveles",
    "Material: PP + Silicona",
    "Brida: 27 mm",
    "Capacidad: 180 ml",
    "Tamaño: 13 x 12 x 7 cm",
    "Incluye: 4 adaptadores",
    "Uso: Esterilizar antes de usar"
  ]
},
{
  id: "extractor-inalambrico-s20",
  name: "Extractor Eléctrico S20 Pezón Plano e Invertido",
  price: 250,
  category: "Lactancia",
  subCategory: "Extractores y Recolector de leche",
  type: "extractor",
  image: "imagenes/Lactancia/extractor s20.jpeg",
  highlights: [
    "Modos y niveles: 3 modos y 9 niveles",
    "Material: PP + Silicona",
    "Adaptadores: 18mm, 21mm, 24mm y 27mm",
    "Capacidad: 140 ml",
    "Tamaño: 13 x 12 x 8 cm",
    "Incluye: Repuesto de adaptadores",
    "Uso: Esterilizar antes de usar"
  ]
},
{
  id: "extractor-inalambrico-s09-2da-gen",
  name: "Extractor Eléctrico S09 2da Generación",
  price: 208,
  category: "Lactancia",
  subCategory: "Extractores y Recolector de leche",
  type: "extractor",
  image: "imagenes/Lactancia/s09 2da gen.jpeg",
  highlights: [
    "Modos y niveles: 3 modos y 9 niveles",
    "Material: PP + Silicona",
    "Brida: 24 mm",
    "Capacidad: 150 ml",
    "Tamaño: 16 x 12 x 8 cm",
    "Incluye: 4 adaptadores y repuestos",
    "Uso: Esterilizar antes de usar"
  ]
},
{
  id: "extractor-inalambrico-s09",
  name: "Extractor Inalámbrico Recargable S09",
  price: 208,
  category: "Lactancia",
  subCategory: "Extractores y Recolector de leche",
  type: "extractor",
  image: "imagenes/Lactancia/EXTRACTOR S09.jpeg",
  highlights: [
    "Modos y niveles: 3 modos y 9 niveles",
    "Material: PP + Silicona",
    "Brida: 24 mm",
    "Capacidad: 210 ml",
    "Tamaño: 16 x 12 x 8 cm",
    "Incluye: Tapa protectora",
    "Uso: Esterilizar antes de usar"
  ]
},
/*{
  id: "extractor-leche-manual-2en1",
  name: "Extractor de Leche Manual 2 en 1 Portátil",
  price: 29,
  category: "Lactancia",
  subCategory: "Extractores y Recolector de leche",
  type: "extractor",
  image: "imagenes/Alimentación y Lactancia/EXTRACTOR S09.jpeg",
  highlights: [
    "Tamaño: 23 x 10 cm",
    "Material: PP y silicona",
    "Seguro: Libre de BPA",
    "Capacidad: 150 ml",
    "Incluye: Tapa de biberón",
    "Incluye: Manual de uso",
    "Uso: Extractor manual portátil",
    "Recomendación: Esterilizar antes de usar"
  ]
},
*/
{
  id: "extractor-momcozy-m5",
  name: "Extractor Inalámbrico Momcozy M5 (Doble)",
  price: 999,
  category: "Lactancia",
  subCategory: "Extractores y Recolector de leche",
  type: "extractor",
  image: "imagenes/Lactancia/EXTRACTOR MOMCOZY.jpeg",
  highlights: [
    "Modelo: MOMCOZY M5",
    "Extractores: 2 extractores",
    "Modos y niveles: 3 modos y 9 niveles",
    "Material: PP + Silicona",
    "Adaptadores: 3 pares (17, 19 y 21 mm)",
    "Batería: Hasta 2 horas",
    "Incluye: Maletín, 2 tapas de protección",
    "Accesorios: 2 cables tipo C + manual"
  ]
},
{
  id: "recolector-leche-pigeon-120ml",
  name: "Recolector de Leche Pigeon Silicona 120ml",
  price: 65,
  category: "Lactancia",
  subCategory: "Extractores y Recolector de leche",
  type: "recolector",
  image: "imagenes/Lactancia/RECOLECTOR DE LECHE PIGEON.jpeg",
  highlights: [
    "Capacidad: 120 ml / 4 oz",
    "Material: 100% silicona de grado alimenticio",
    "Seguro: Libre de BPA y BPS",
    "Resistente: Soporta hasta 120°C",
    "Uso: Recolección pasiva de leche materna",
    "Apto: Para distintos métodos de esterilización",
    "Incluye: Caja con instrucciones y cuidados",
    "Marca: Pigeon"
  ]
},
{
  id: "bolsitas-leche-250ml-30unid",
  name: "Bolsitas de Leche 250ml (30 unidades)",
  price: 29,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "bolsitas",
  image: "imagenes/Lactancia/BOLSAS DE LECHE.jpeg",
  highlights: [
    "Capacidad: 250 ml",
    "Cantidad: 30 unidades",
    "Seguro: Libre de BPA y BPS",
    "Estado: Preesterilizadas",
    "Datos: Espacio para escribir información",
    "Uso: Almacenamiento de leche materna",
    "Práctico: Ideal para refrigerar o congelar",
    "Compatibilidad: Uso universal"
  ]
},
{
  id: "almohada-lactancia-3en1",
  name: "Almohada de Lactancia 3 en 1",
  price: 99,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "almohada",
  image: "imagenes/Lactancia/Almohada de Lactancia 3 en 1.jpeg",
  highlights: [
    "Material: Algodón",
    "Diseño: Ergonómico",
    "Correa: Ajustable",
    "Almohada: 60 x 60 cm",
    "Valla de seguridad: 36 x 14 cm",
    "Uso: Lactancia y descanso del bebé",
    "Función: Soporte cómodo para mamá",
    "Regalo: Mini almohada (Live TikTok)"
  ]
},
{
  id: "masajeador-pecho-vibracion-calor",
  name: "Masajeador de Pecho 10 Modos de Vibración y Calor",
  price: 69,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "masajeador",
  image: "imagenes/Lactancia/MASAJEADOR DE PECHO.jpeg",
  highlights: [
    "Vibración: 10 modos",
    "Calor: 3 niveles (45°C – 55°C)",
    "Material: Silicona médica",
    "Medidas: 13 x 6 cm",
    "Seguro: Libre de BPA",
    "Batería: Recargable",
    "Ayuda: Estimula el flujo de leche",
    "Alivio: Reduce molestias mamarias"
  ]
},
{
  id: "formador-pezon-pigeon",
  name: "Formador de Pezón Pigeon Libre de BPA/BPS",
  price: 35,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "formador",
  image: "imagenes/Lactancia/Formador Pigeon.jpg",
  highlights: [
    "Seguro: Libre de BPA y BPS",
    "Medidas: 7 x 3 cm",
    "Material: Goma de silicona y PP",
    "Uso: Da forma a pezones planos",
    "Función: Ayuda en pezones invertidos",
    "Diseño: Cómodo y discreto",
    "Incluye: Instrucciones de limpieza",
    "Marca: Pigeon"
  ]
},

{
  id: "formador-pezon-babypal",
  name: "Formador de Pezón BabyPal Libre de BPA/BPS",
  price: 19,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "formador",
  image: "imagenes/Lactancia/Formador BabyPal.jpg",
  highlights: [
    "Seguro: Libre de BPA y BPS",
    "Medidas: 7 x 3 cm",
    "Material: Goma de silicona y PP",
    "Uso: Da forma a los pezones planos",
    "Función: Ayuda en pezones invertidos",
    "Diseño: Cómodo y fácil de usar",
    "Incluye: Instrucciones de limpieza",
    "Recomendación: Esterilizar antes de usar"
  ]
},
{
  id: "crema-lanolina-40g",
  name: "Crema de Lanolina para Pezones Sensibles 40g",
  price: 55,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "crema",
  image: "imagenes/Lactancia/Lanoina.jpg",
  highlights: [
    "Contenido: 1.4 oz / 40 g",
    "Función: Hidrata y protege la piel",
    "Uso: Pezones sensibles y piel agrietada",
    "Seguro: Hipoalergénica",
    "Libre de: Conservantes y parabenos",
    "Sin: Fragancias ni sabor",
    "Aplicación: Instrucciones en la caja",
    "Marca: Lansinoh"
  ]
},
{
  id: "crema-lanolina-7g",
  name: "Crema de Lanolina para Pezones Sensibles 7g",
  price: 32,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "crema",
  image: "imagenes/Lactancia/Lanoina.jpg",
  highlights: [
    "Contenido: 0.25 oz / 7 g",
    "Función: Hidrata y protege la piel",
    "Uso: Pezones sensibles y piel agrietada",
    "Seguro: Hipoalergénica",
    "Libre de: Conservantes y parabenos",
    "Sin: Fragancias ni sabor",
    "Aplicación: Instrucciones en la caja",
    "Marca: Lansinoh"
  ]
},
{
  id: "aceite-bio-oil-25ml",
  name: "Aceite Bio-Oil 25ml para Estrías, Cicatrices y Manchas",
  price: 29,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "aceite",
  image: "imagenes/Lactancia/BioOil.jpg",
  highlights: [
    "Contenido: 25 ml",
    "Uso: Desde el embarazo hasta el postparto",
    "Aplicación: 2 veces al día con masaje circular",
    "Estrías: Previene y mejora su apariencia",
    "Cicatrices: Ayuda a reducir marcas nuevas y antiguas",
    "Manchas: Mejora el tono desigual de la piel",
    "Arrugas: Suaviza y tonifica la piel",
    "Cuidado: Ideal para piel sensible"
  ]
},
{
  id: "protectores-pezones-lansinoh-20mm",
  name: "2 Protectores de Pezones Lansinoh con Estuche",
  price: 50,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "protector",
  image: "imagenes/Lactancia/Protector.jpg",
  highlights: [
    "Cantidad: 2 protectores con estuche",
    "Tamaño: 20 mm",
    "Material: Silicona suave y flexible",
    "Seguro: Libre de BPA y BPS",
    "Uso: Para pezones planos o invertidos",
    "Apoyo: Ideal en casos de frenillo lingual o labial",
    "Beneficio: Ayuda en bajada excesiva de leche",
    "Marca: Lansinoh"
  ]
},
{
  id: "pads-pigeon-honeycomb",
  name: "Pads de Lactancia Pigeon Honeycomb",
  price: 15,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "pads",
  image: "imagenes/Lactancia/Pads_Pigeon_1024x1024.jpg",
  highlights: [
    "Tipo: Protectores de lactancia desechables",
    "Tecnología: Forma de panal (Honeycomb)",
    "Absorción: Rápida y eficiente",
    "Interior: Respirables",
    "Protección: Cobertura a prueba de derrames",
    "Uso: Día y noche",
    "Marca: Pigeon",
    "Ideal: Para mantener la ropa seca durante la lactancia"
  ]
},


{
  id: "gel-hielo-reutilizable",
  name: "Gel de Hielo Reutilizable",
  price: 30,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "gel_hielo",
  image: "imagenes/Gel de Hielo.jpeg",
  highlights: [
    "Uso: Mantiene frío alimentos y leche materna",
    "Diseño: Compacto y fácil de almacenar",
    "Material: Plástico resistente y seguro",
    "Sistema: Rellenable con agua",
    "Reutilizable: Apto para múltiples usos",
    "Ideal: Para loncheras y bolsas térmicas",
    "Duración: Conserva temperatura por horas",
    "Fácil: Solo congelar antes de usar"
  ]
},






/*{
  id: "pack-terapia-pechos-calor-frio",
  name: "Pack de Terapia para Pechos con Calor y Frío",
  price: 87,
  category: "Lactancia",
  subCategory: "Complementos",
  type: "terapia",
  image: "imagenes/Alimentación y Lactancia/MASAJEADOR DE PECHO.jpeg",
  highlights: [
    "Seguro: Libre de BPA y BPS",
    "Frío: Reduce dolor e hinchazón por congestión",
    "Alivio: Ayuda en conductos obstruidos y mastitis",
    "Calor: Estimula el flujo de leche",
    "Uso: Ideal durante la extracción",
    "Diseño: Almohadillas suaves y flexibles",
    "Ajuste: Cobertura de 360° del pecho",
    "Marca: Lansinoh"
  ]
},
*/




//-------------------------BIBERONES Y TETINAS------------------------
{
  id: "biberon-pigeon-pp",
  name: "Biberón Pigeon PP Libre de BPA y BPS",
  price: 40,
  category: "Alimentación del Bebé",
  subCategory: "Biberones y Tetinas",
  type: "biberon",
  image: "imagenes/Alimentación del Bebé/biberon_160ml.jpg",
  highlights: [
    "Modelos: 160 ml",
    "Edad: 0+ / 3+ / 6+ meses",
    "Material: Polipropileno y silicona",
    "Seguro: Libre de BPA y BPS",
    "Tetina: Sistema anticólico, corte en Y",
    "Válvula: AVS minimiza el aire al tragar",
    "Incluye: Caja con métodos de esterilización",
    "Guía: Elección de tetina incluida"
  ]
},

{
  id: "biberon-pigeon-pp",
  name: "Biberón Pigeon PP Libre de BPA y BPS",
  price: 50,
  category: "Alimentación del Bebé",
  subCategory: "Biberones y Tetinas",
  type: "biberon",
  image: "imagenes/Alimentación del Bebé/biberon_240ml.jpg",
  highlights: [
    "Modelos: 240 ml",
    "Edad: 0+ / 3+ / 6+ meses",
    "Material: Polipropileno y silicona",
    "Seguro: Libre de BPA y BPS",
    "Tetina: Sistema anticólico, corte en Y",
    "Válvula: AVS minimiza el aire al tragar",
    "Incluye: Caja con métodos de esterilización",
    "Guía: Elección de tetina incluida"
  ]
},


{
  id: "biberon-pigeon-pp",
  name: "Biberón Pigeon PP Libre de BPA y BPS",
  price: 60,
  category: "Alimentación del Bebé",
  subCategory: "Biberones y Tetinas",
  type: "biberon",
  image: "imagenes/Alimentación del Bebé/biberon_330ml.jpg",
  highlights: [
    "Modelos: 330 ml",
    "Edad: 0+ / 3+ / 6+ meses",
    "Material: Polipropileno y silicona",
    "Seguro: Libre de BPA y BPS",
    "Tetina: Sistema anticólico, corte en Y",
    "Válvula: AVS minimiza el aire al tragar",
    "Incluye: Caja con métodos de esterilización",
    "Guía: Elección de tetina incluida"
  ]
},






{
  id: "biberon-pigeon-vidrio-160ml",
  name: "Biberón Pigeon 160ml de Vidrio Libre de BPA y BPS",
  price: 64,
  category: "Alimentación del Bebé",
  subCategory: "Biberones y Tetinas",
  type: "biberon",
  image: "imagenes/Alimentación del Bebé/BIBERON DE VIDRIO 160ML.jpeg",
  highlights: [
    "Modelo: 160 ml para +0 meses",
    "Material: Vidrio",
    "Seguro: Libre de BPA y BPS",
    "Tetina: Sistema anticólico, corte en Y",
    "Válvula: AVS minimiza el aire al tragar",
    "Incluye: Métodos de esterilización",
    "Guía: Elección de tetina incluida",
    "Uso: Apto desde recién nacido"
  ]
},
{
  id: "biberon-pigeon-vidrio-240ml",
  name: "Biberón Pigeon 240ml de Vidrio Libre de BPA y BPS",
  price: 79,
  category: "Alimentación del Bebé",
  subCategory: "Biberones y Tetinas",
  type: "biberon",
  image: "imagenes/Alimentación del Bebé/biberon240.jpg",
  highlights: [
    "Modelo: 240 ml para +3 meses",
    "Material: Vidrio",
    "Seguro: Libre de BPA/BPS",
    "Tetina: Sistema anticólico, corte en Y",
    "Válvula AVS: Minimiza el aire al tragar",
    "Caja: Con métodos de esterilización",
    "Incluye: Guía para elección de tetina"
  ]
},

{
  id: "biberon-pigeon-necesidades-especiales",
  name: "Biberón Pigeon Boca Standard para Necesidades Especiales",
  price: 35,
  category: "Alimentación del Bebé",
  subCategory: "Biberones y Tetinas",
  type: "biberon",
  image: "imagenes/Alimentación del Bebé/Biberon Boca Standar.jpg",
  highlights: [
    "Modelo: 240 ml para bebé prematuro",
    "Uso: Bebés con poca fuerza de succión",
    "Indicado: Paladar o labio hendido",
    "Material: Polipropileno y silicona",
    "Seguro: Libre de BPA y BPS",
    "Tetina: Corte en Y con válvula antirretorno",
    "Diseño: Lado grueso y delgado para mejor succión",
    "Incluye: Guía de uso y limpieza"
  ]
},
{
  id: "tetina-pigeon-silicona-anticolico",
  name: "Tetina Pigeon de Silicona con Sistema Anticólico",
  price: 39,
  category: "Alimentación del Bebé",
  subCategory: "Biberones y Tetinas",
  type: "tetina",
  image: "imagenes/Alimentación del Bebé/TETINAS PIGEON.jpeg",
  highlights: [
    "Modelos: SS, S, M, L, LL y LLL",
    "Edad: 0+ / 1+ / 3+ / 6+ / 9+ / 15+ meses",
    "Material: Silicona",
    "Sistema: Anticólico",
    "Corte: Flujo adaptado a cada etapa",
    "Unidades: 2 piezas",
    "Compatibilidad: Biberones Pigeon",
    "Uso: Alimentación segura del bebé"
  ]
},
{
  id: "calentador-biberon-portatil",
  name: "Calentador de Biberón Portátil",
  price: 69,
  category: "Alimentación del Bebé",
  subCategory: "Calentadores de Leche",
  type: "calentador",
  image: "imagenes/Alimentación del Bebé/CALENTADOR BIBERON.jpeg",
  highlights: [
    "Medidas: 15 x 6 x 9 cm",
    "Temperatura: 6 niveles de 37°C a 55°C",
    "Batería: Recargable con cable tipo C",
    "Pantalla: Indicador de termostato y batería",
    "Ajustable: Compatible con distintos biberones",
    "Portátil: Ideal para pañalera o mochila",
    "Uso: Calienta leche y líquidos",
    "Práctico: Fácil de usar en cualquier lugar"
  ]
},
{
  id: "calentador-leche-pantalla-digital",
  name: "Calentador de Leche con Pantalla Digital",
  price: 129,
  category: "Alimentación del Bebé",
  subCategory: "Calentadores de Leche",
  type: "calentador",
  image: "imagenes/Alimentación del Bebé/CALENTADOR DE LECHE.jpeg",
  highlights: [
    "Medidas: 12 x 8 cm",
    "Material: Acero inoxidable",
    "Temperatura: De 37°C hasta 50°C",
    "Uso: Calentar y descongelar leche",
    "Incluye: 5 adaptadores + 1 tapa",
    "Envase: Capacidad de 180 ml",
    "Batería: Recargable",
    "Carga: Cable tipo C"
  ]
},
{
  id: "silla-comer-rodante-bandeja",
  name: "Silla de Comer Rodante con Bandeja Extraíble",
  price: 139,
  category: "Alimentación del Bebé",
  subCategory: "Sillas de Comer",
  type: "silla",
  image: "imagenes/Alimentación del Bebé/Silla Comedor Bandeja Extraible.jpeg",
  highlights: [
    "Medidas: 98 x 42 x 60 cm",
    "Bandeja: Extraíble y desmontable",
    "Soporta: Hasta 12 kg aprox.",
    "Seguridad: Cinturón de 5 puntos",
    "Material: ABS y metal",
    "Forro: Acolchado",
    "Patas: Con ruedas y frenos",
    "Incluye: Almacenamiento inferior"
  ]
},
/*{
  id: "silla-comer-multifuncion-rodante",
  name: "Silla de Comer Multifunción Rodante y Reclinable",
  price: 279,
  category: "Alimentación del Bebé",
  subCategory: "Sillas de Comer",
  type: "silla",
  image: "imagenes/Alimentación y Lactancia/BIBERON DE VIDRIO 160ML.jpeg",
  highlights: [
    "Medidas: 105 x 55 x 60 cm",
    "Bandeja: Extraíble y ajustable",
    "Soporta: Hasta niños de 2 años",
    "Seguridad: Cinturón de 5 puntos",
    "Material: PP + ABS",
    "Forro: Acolchado",
    "Patas: Con ruedas y frenos",
    "Respaldo: Reclinable y multifunción"
  ]
},
*/
{
  id: "dispensador-formula-3-capas",
  name: "Dispensador para Fórmula de 3 Capas",
  price: 18,
  category: "Alimentación del Bebé",
  subCategory: "Complementos",
  type: "dispensador",
  image: "imagenes/Alimentación del Bebé/DISPENSADOR DE FORMULA.jpeg",
  highlights: [
    "Medidas: 24 x 7.5 cm",
    "Capas: 3 compartimentos de 5 cm",
    "Material: Polipropileno",
    "Seguro: Libre de BPA",
    "Boquilla: Para alimentos líquidos",
    "Uso: Almacenar fórmula",
    "Versátil: Apto para avena y snacks",
    "Portátil: Ideal para salidas"
  ]
},
{
  id: "procesador-alimentos-bebes-2en1",
  name: "Procesador de Alimentos para Bebés 2 en 1",
  price: 159,
  category: "Alimentación del Bebé",
  subCategory: "Complementos",
  type: "procesador",
  image: "imagenes/Alimentación del Bebé/Procesador de Alimentos.jpg",
  highlights: [
    "Medidas: 23 x 20 x 13 cm",
    "Material: PP y acero inoxidable",
    "Función: Prepara papillas y puré",
    "Modos: Vaporizar y licuar",
    "Seguro: Libre de BPA",
    "Voltaje: 220V",
    "Corte: Trozos pequeños para fácil licuado",
    "Uso: Alimentación saludable para bebés"
  ]
},


{
  id: "tazas-almacenamiento-pigeon-160ml",
  name: "3 Tazas de Almacenamiento Pigeon 160ml Convertible en Biberón",
  price: 50,
  category: "Alimentación del Bebé",
  subCategory: "Complementos",
  type: "almacenamiento",
  image: "imagenes/Alimentación del Bebé/TAZAS RECOLECTORAS 3.jpeg",
  highlights: [
    "Incluye: 3 tazas de 160 ml / 5 oz",
    "Uso: Almacenar leche materna",
    "2 en 1: Se convierte en biberón de boca ancha",
    "Material: Polipropileno",
    "Seguro: Libre de BPA y BPS",
    "Compatibilidad: Boca ancha Pigeon",
    "Práctico: Ideal para refrigerar o transportar",
    "Marca: Pigeon"
  ]
},










{
  id: "set-limpiador-biberones",
  name: "Set Limpiador de Biberones",
  price: 39,
  category: "Higiene y Limpieza",
  subCategory: "Limpiadores",
  type: "limpieza",
  image: "imagenes/Higiene y Limpieza/LIMPIADOR DE BIBERON SET.jpeg",
  highlights: [
    "Material: Silicona líquida y PP",
    "Incluye: Cepillo para biberón",
    "Incluye: Cepillo para tetina",
    "Incluye: Cepillo para cañita (pajilla)",
    "Incluye: Dispensador de jabón",
    "Incluye: Base de secado",
    "Colores: Amarillo, Rosa y Celeste",
    "Uso: Limpieza de accesorios del bebé"
  ]
},
{
  id: "limpiador-biberones-pigeon-450ml",
  name: "Limpiador de Biberones Pigeon 450ml",
  price: 49,
  category: "Higiene y Limpieza",
  subCategory: "Limpiadores",
  type: "limpiador",
  image: "imagenes/Higiene y Limpieza/LIMPIADOR 450.jpeg",
  highlights: [
    "Modelo: Para +0 meses (450 ml)",
    "Limpieza: Mata 99.99% de bacterias",
    "Seguro: Ingredientes de grado alimenticio",
    "Uso: Lava accesorios del bebé",
    "Multiuso: Apto para frutas y vegetales",
    "Empaque: Incluye modo de uso",
    "Marca: Pigeon",
    "Aplicación: Limpieza diaria"
  ]
},
{
  id: "limpiador-biberones-pigeon-650ml",
  name: "Limpiador de Biberones Pigeon 650ml",
  price: 45,
  category: "Higiene y Limpieza",
  subCategory: "Limpiadores",
  type: "limpiador",
  image: "imagenes/Higiene y Limpieza/LIMPIADOR 650.jpeg",
  highlights: [
    "Modelo: Para +0 meses (650 ml)",
    "Limpieza: Mata 99.99% de bacterias",
    "Seguro: Ingredientes de grado alimenticio",
    "Uso: Lava accesorios del bebé",
    "Multiuso: Apto para frutas y vegetales",
    "Empaque: Eco refill",
    "Incluye: Modo de uso",
    "Marca: Pigeon"
  ]
},
{
  id: "limpiador-biberones-pigeon-700ml",
  name: "Limpiador de Biberones Pigeon 700ml",
  price: 65,
  category: "Higiene y Limpieza",
  subCategory: "Limpiadores",
  type: "limpiador",
  image: "imagenes/Higiene y Limpieza/LIMPIADOR 700.jpeg",
  highlights: [
    "Modelo: Para +0 meses (700 ml)",
    "Limpieza: Mata 99.99% de bacterias",
    "Seguro: Ingredientes de grado alimenticio",
    "Uso: Lava accesorios del bebé",
    "Multiuso: Apto para frutas y vegetales",
    "Empaque: Botella con tapa dosificadora",
    "Incluye: Modo de uso",
    "Marca: Pigeon"
  ]
},

//---------------------------------------------------------------------------------

{
  id: "aspirador-nasal-pigeon-tubo",
  name: "Aspirador Nasal Pigeon Tipo Tubo",
  price: 42,
  category: "Higiene y Limpieza",
  subCategory: "Complementos",
  type: "aspirador",
  image: "imagenes/Higiene y Limpieza/ASPIRADOR NASAL.jpeg",
  highlights: [
    "Edad: Bebés +0 meses",
    "Material: Polipropileno, silicona y poliestireno",
    "Seguro: Libre de BPA",
    "Succión: Controlada por la respiración del adulto",
    "Uso: Limpieza nasal segura",
    "Incluye: Aspirador nasal",
    "Incluye: Estuche de almacenamiento",
    "Caja: Guía de uso y esterilización"
  ]
},
{
  id: "esterilizador-biberones-multifuncion-8-modos",
  name: "Esterilizador de Biberones Multifunción 8 Modos",
  price: 139,
  category: "Higiene y Limpieza",
  subCategory: "Complementos",
  type: "esterilizador",
  image: "imagenes/Higiene y Limpieza/Limpiador.jpg",
  highlights: [
    "Medidas: 28 x 20 x 15 cm",
    "Material: PP libre de BPA",
    "Funciones: Esteriliza y calienta",
    "Modos: 8 modos multifunción",
    "Uso: Esterilizar biberones y accesorios",
    "Extra: Descongela y calienta leche",
    "Rápido: Calentamiento eficiente",
    "Versátil: Preparar leche en polvo y vapor"
  ]
},
{
  id: "cortaunas-bebe-electrico-rosa",
  name: "Lima Eléctrica (Rosado y Celeste))",
  price: 20,
  category: "Higiene y Limpieza",
  subCategory: "Complementos",
  type: "cortaunas",
  image: "imagenes/Higiene y Limpieza/Cortaunas_Bebe_Electrico_1024x1024.jpg",
  highlights: [
    "Incluye: Cortaúñas eléctrico + 5 limas intercambiables",
    "Diseño: Ergonómico y portátil",
    "Seguro: Ideal para uñas delicadas del bebé",
    "Funcionamiento: Suave y silencioso",
    "Accesorios: Discos de diferentes texturas y colores",
    "Uso: Desde recién nacido",
    "Incluye: Estuche protector",
    "Fácil: De usar y transportar"
  ]
},
{
  id: "baby-care-kit-rosa",
  name: "Baby Kit de Limpieza",
  price: 49,
  category: "Higiene y Limpieza",
  subCategory: "Complementos",
  type: "set",
  image: "imagenes/Higiene y Limpieza/Baby_Care_Kit_Rosa_1024x1024.jpg",
  highlights: [
    "Incluye: 8 piezas esenciales de cuidado",
    "Contenido: Cepillo, peine, termómetro, tijeras, cortaúñas, lima, aspirador nasal y pinza",
    "Edad: Desde recién nacido (0+)",
    "Material: Libre de BPA",
    "Seguro: Puntas redondeadas para mayor protección",
    "Ideal: Kit completo para higiene del bebé",
    "Presentación: Caja organizadora",
    "Color: Rosa"
  ]
},
{
  id: "baby-care-kit-rosa-compacto",
  name: "Baby Kit de Limpieza Básico",
  price: 19,
  category: "Higiene y Limpieza",
  subCategory: "Complementos",
  type: "set",
  image: "imagenes/Higiene y Limpieza/Baby_Care_Kit_Rosa_Compacto_1024x1024.jpg",
  highlights: [
    "Incluye: 5 piezas esenciales",
    "Contenido: Cepillo, peine, tijeras, cortaúñas y lima",
    "Edad: Desde recién nacido (0+)",
    "Material: Libre de BPA",
    "Seguro: Tijeras de punta redondeada",
    "Ideal: Kit básico para el cuidado diario",
    "Presentación: Caja con ventana",
    "Color: Rosa"
  ]
},







//-------------------------------------------------------------------------
{
  id: "banera-plegable-termometro",
  name: "Bañera Plegable con Termómetro",
  price: 99,
  category: "Baño del Bebé",
  subCategory: "Bañeras",
  type: "banera",
  image: "imagenes/Baño del Bebé/Bañera.jpg",
  highlights: [
    "Material: Polipropileno + TPE",
    "Medidas: 21 x 46 x 83 cm",
    "Capacidad: 52 L",
    "Plegable: Fácil de guardar",
    "Patas: Antideslizantes",
    "Incluye: Termómetro digital",
    "Incluye: Regadera ballena",
    "Extra: Cojín acolchado"
  ]
},
{
  id: "parante-banera-plegable-metal",
  name: "Parante para Bañera Plegable de Metal",
  price: 65,
  category: "Baño del Bebé",
  subCategory: "Complementos",
  type: "parante",
  image: "imagenes/Baño del Bebé/PARANTE BAÑERA.jpeg",
  highlights: [
    "Soporta: Hasta 80 kg",
    "Material: Metal resistente",
    "Plegable: Fácil de guardar",
    "Medidas: 41 x 55 x 93 cm",
    "Uso: Soporte para bañera",
    "Función extra: Colgar prendas",
    "Estable: Estructura firme",
    "Práctico: Ideal para el baño del bebé"
  ]
},
{
  id: "banera-cambiador-termometro-2en1",
  name: "Bañera Cambiador con Termómetro 2 en 1",
  price: 349,
  category: "Baño del Bebé",
  subCategory: "Bañeras",
  type: "banera",
  image: "imagenes/Baño del Bebé/BAÑERA CAMBIADOR.jpeg",
  highlights: [
    "Material: Hierro y polipropileno",
    "Medidas: 83 x 48 x 93 cm",
    "Soporta: De 20 a 30 kg",
    "Altura: Ajustable",
    "Cambiador: Acolchado",
    "Incluye: Termómetro integrado",
    "Patas: Antideslizantes con ruedas",
    "Almacenaje: Espacios para accesorios"
  ]
},
{
  id: "gorra-bano-corona",
  name: "Gorra de Baño Corona",
  price: 15,
  category: "Baño del Bebé",
  subCategory: "Accesorios",
  type: "gorra",
  image: "imagenes/Baño del Bebé/gorro.jpg",
  highlights: [
    "Colores: Amarillo y Verde",
    "Material: Polipropileno",
    "Uso: Protege ojos y oídos",
    "Diseño: Forma de corona",
    "Ajuste: Cómodo para el bebé",
    "Función: Facilita el baño",
    "Ligera: Fácil de colocar",
    "Ideal: Para bebés y niños pequeños"
  ]
},
{
  id: "regadera-electrica-bebe",
  name: "Regadera Eléctrica para Bebé",
  price: 39,
  category: "Baño del Bebé",
  subCategory: "Accesorios",
  type: "regadera",
  image: "imagenes/Baño del Bebé/pato.jpg",
  highlights: [
    "Modos: 2 modos de riego",
    "Manguera: Ajustable",
    "Batería: Pilas doble AA",
    "Uso: Facilita el baño del bebé",
    "Diseño: Amigable y seguro",
    "Flujo: Suave y continuo",
    "Portátil: Fácil de usar",
    "Ideal: Para recién nacidos"
  ]
},
{
  id: "toalla-bano-bebe",
  name: "Toalla de Baño para Bebé",
  price: 26,
  category: "Baño del Bebé",
  subCategory: "Accesorios",
  type: "toalla",
  image: "imagenes/Baño del Bebé/toalla.jpg",
  highlights: [
    "Colores: Crema, Verde, Marrón y Gris",
    "Medidas: 138 x 69 cm",
    "Material: Algodón hipoalergénico",
    "Uso: Secado después del baño",
    "Suave: Cuida la piel del bebé",
    "Edad: Hasta 4 añitos",
    "Diseño: Envolvente y cómodo",
    "Práctica: Fácil de lavar"
  ]
},
{
  id: "toalla-bano-capucha-bebe",
  name: "Toalla de Baño con Capucha para Bebé",
  price: 26,
  category: "Baño del Bebé",
  subCategory: "Accesorios",
  type: "toalla",
  image: "imagenes/Baño del Bebé/capucha.jpg",
  highlights: [
    "Colores: Blanco, Rosa, Celeste y Gris",
    "Medidas: 76 x 90 cm",
    "Material: Algodón hipoalergénico",
    "Capucha: Mantiene la cabeza abrigada",
    "Uso: Secado después del baño",
    "Suave: Ideal para piel sensible",
    "Edad: Hasta 2 añitos",
    "Diseño: Tierno y funcional"
  ]
},
{
  id: "mecedora-automatica-bluetooth",
  name: "Mecedora Automática con Bluetooth",
  price: 279,
  category: "Sueño y Descanso",
  subCategory: "Mecedoras",
  type: "mecedora",
  image: "imagenes/Sueño y Descanso/blutu.jpg",
  highlights: [
    "Material: Aluminio resistente",
    "Modos: 5 variaciones de movimiento",
    "Bluetooth: Reproduce música",
    "Ajustes: Pantalla táctil",
    "Seguridad: Cinturón de 5 puntos",
    "Incluye: Mosquitero y funda",
    "Extras: 2 juguetes integrados",
    "Control: Incluye control remoto"
  ]
},
{
  id: "mecedora-manual-vibracion-suave",
  name: "Mecedora Manual con Vibración Suave",
  price: 109,
  category: "Sueño y Descanso",
  subCategory: "Mecedoras",
  type: "mecedora",
  image: "imagenes/Sueño y Descanso/mecedora.jpg",
  highlights: [
    "Soporta: Hasta 11.3 kg",
    "Asiento: Acolchado",
    "Medidas: 56 x 50 x 65 cm",
    "Seguridad: Cinturón de 2 puntos",
    "Base: Antideslizante",
    "Modos: Vibración suave y manual",
    "Incluye: 3 juguetes colgantes",
    "Uso: Descanso y estimulación del bebé"
  ]
},
{
  id: "cuna-colecho-ajustable-4en1",
  name: "Cuna Colecho Ajustable 3 en 1",
  price: 249,
  category: "Sueño y Descanso",
  subCategory: "Cuna y Almohada Colecho",
  type: "cuna",
  image: "imagenes/Sueño y Descanso/cuna.jpg",
  highlights: [
    "Medidas: 88 x 56 x 122 cm",
    "Altura: 5 niveles ajustables",
    "Soporta: Hasta 50 kg",
    "Modos: Cuna, Mecedora y Colecho",
    "Ruedas: Giratorias 360° con frenos",
    "Incluye: Mosquitero",
    "Colchón: Recto (previene SMSL)",
    "Extra: Almacenamiento inferior"
  ]
},


{
  id: "cuna-colecho-ajustable-5en1",
  name: "Cuna Colecho Cambiador Ajustable 4 en 1",
  price: 249,
  category: "Sueño y Descanso",
  subCategory: "Cuna y Almohada Colecho",
  type: "cuna",
  image: "imagenes/Sueño y Descanso/colecho.jpg",
  highlights: [
    "Medidas: 88 x 56 x 122 cm",
    "Altura: 5 niveles ajustables",
    "Soporta: Hasta 50 kg",
    "Modos: Cuna, Mecedora y Colecho",
    "Ruedas: Giratorias 360° con frenos",
    "Incluye: Mosquitero",
    "Colchón: Recto (previene SMSL)",
    "Extra: Almacenamiento inferior"
  ]
},
{
  id: "cuna-corral-plegable",
  name: "Cuna Corral Plegable",
  price: 349,
  category: "Sueño y Descanso",
  subCategory: "Cuna y Almohada Colecho",
  type: "cuna",
  image: "imagenes/Cunal Corral Pegable.jpeg",
  highlights: [
    "Diseño: Plegable y fácil de transportar",
    "Incluye: Mosquitero completo desmontable",
    "Estructura: Marco reforzado y seguro",
    "Niveles: Base amplia y cómoda para descanso",
    "Acceso: Puerta lateral con cierre",
    "Movilidad: Ruedas con sistema de bloqueo",
    "Material: Tela resistente y transpirable",
    "Ideal: Desde recién nacido hasta 3 años aprox."
  ]
},
/*{
  id: "almohada-colecho-multifuncional",
  name: "Almohada Colecho Multifuncional y Portátil",
  price: 99,
  category: "Sueño y Descanso",
  subCategory: "Cuna y Almohada Colecho",
  type: "almohada",
  image: "imagenes/Sueno/ALMOHADA COLECHO MULTIFUNCIONAL.jpeg",
  highlights: [
    "Diseño: Estampado de carritos",
    "Colecho: 12 x 48.5 x 76 cm",
    "Cojín: 16 x 3 x 12 cm",
    "Material: Algodón hipoalergénico",
    "Uso: Moisés de cama",
    "Función: Cambiador portátil",
    "Zona: Descanso o juego",
    "Regalo: Mini almohadita (Live TikTok)"
  ]
},
*/
/*
{
  id: "organizador-4-niveles-rodante",
  name: "Organizador 4 Niveles Rodante",
  price: 69,
  category: "Organización",
  subCategory: "Organizadores multi niveles",
  type: "organizador",
  image: "imagenes/Organizacion/ORGANIZADOR 4 NIVELES RODANTE.jpeg",
  highlights: [
    "Medidas: 90 x 23 x 34 cm",
    "Ruedas: Giratorias 360° con frenos",
    "Material: Plástico ABS",
    "Niveles: 4 compartimentos",
    "Cajones: Extraíbles",
    "Almacenaje: Juguetes y pañales",
    "Uso: Organización del hogar",
    "Práctico: Fácil de mover"
  ]
},
*/
{
  id: "organizador-3-niveles-canastas-ganchos",
  name: "Organizador 3 Niveles con Canastas y Ganchos",
  price: 109,
  category: "Organización",
  subCategory: "Organizadores multi niveles",
  type: "organizador",
  image: "imagenes/Organización/organi.jpg",
  highlights: [
    "Medidas: 89 x 38 x 40 cm",
    "Niveles: 3 compartimentos",
    "Ruedas: Giratorias 360° con frenos",
    "Material: Metal y plástico",
    "Soporte: Agarre fácil y cómodo",
    "Incluye: 4 ganchos y 4 canastas grandes",
    "Extras: 3 canastas pequeñas y 2 vasos",
    "Uso: Organización multiuso"
  ]
},
{
  id: "organizador-4-niveles-rodante-1",
  name: "Organizador 4 Niveles Rodante",
  price: 79,
  category: "Organización",
  subCategory: "Organizadores multi niveles",
  type: "organizador",
  image: "imagenes/Organización/orga.jpg",
  highlights: [
    "Medidas: 72 x 26 x 34 cm",
    "Ruedas: Giratorias 360° con frenos",
    "Material: Polipropileno",
    "Niveles: 4 compartimentos",
    "Cajones: Herméticos",
    "Almacenaje: Extractores y biberones",
    "Uso: Organización del hogar",
    "Práctico: Fácil de mover"
  ]
},
{
  id: "coche-moises-multifuncional",
  name: "Coche Moisés Multifuncional",
  price: 279,
  category: "Paseo y Transporte",
  subCategory: "Coches",
  type: "coche",
  image: "imagenes/Paseo y Transporte/moises.jpg",
  highlights: [
    "Colores: Rosa y Marrón",
    "Material: Tela oxford impermeable",
    "Medidas: 105 x 53 x 73 cm",
    "Canasta: Extraíble y ajustable",
    "Capota: Con protección UV",
    "Llantas: Caucho resistente",
    "Incluye: Funda acolchada y tul protector",
    "Plegable: Fácil de transportar"
  ]
},
{
  id: "coche-baston-plegable",
  name: "Coche Bastón Plegable",
  price: 89,
  category: "Paseo y Transporte",
  subCategory: "Coches",
  type: "coche",
  image: "imagenes/Paseo y Transporte/baston.jpg",
  highlights: [
    "Material: Acero y tela oxford",
    "Medidas: 98 x 40 x 58 cm",
    "Capota: Ajustable",
    "Soporta: Hasta 20 kg",
    "Ruedas: 360° con frenos",
    "Plegable: Compacto y ligero",
    "Uso: Paseos diarios",
    "Práctico: Fácil de guardar"
  ]
},
{
  id: "panalera-cambiador-12-compartimientos",
  name: "Pañalera Cambiador con 12 Compartimientos",
  price: 79,
  category: "Paseo y Transporte",
  subCategory: "Complementos",
  type: "panalera",
  image: "imagenes/Paseo y Transporte/pañaler.jpg",
  highlights: [
    "Medidas: 41 x 28 x 18 cm",
    "Expandible: Abierta hasta 66 cm",
    "Espacio: 12 compartimientos",
    "Material: Tela oxford impermeable",
    "Bolsillos: Térmicos para 3 biberones",
    "Comodidad: Espaldar acolchonado",
    "Uso: Pañalera y cambiador",
    "Práctica: Ideal para paseos"
  ]
},
{
  id: "panalera-disney-11-compartimientos",
  name: "Pañalera Disney con 11 Compartimientos",
  price: 39,
  category: "Paseo y Transporte",
  subCategory: "Complementos",
  type: "panalera",
  image: "imagenes/Paseo y Transporte/Pañalera Micky.jpeg",
  highlights: [
    "Medidas: 41 x 28 x 18 cm",
    "Espacio: 11 compartimientos",
    "Modelos: Mickey y Minnie",
    "Colores: Amarillo, Fucsia, Rojo, Azul, Verde y Rosado",
    "Material: Tela oxford impermeable",
    "Bolsillos: Térmicos para 3 biberones",
    "Diseño: Infantil y llamativo",
    "Uso: Paseos diarios"
  ]
},
{
  id: "canguro-bebe-multifuncional",
  name: "Canguro para Bebé Multifuncional",
  price: 99,
  category: "Paseo y Transporte",
  subCategory: "Complementos",
  type: "canguro",
  image: "imagenes/Paseo y Transporte/Canguro Evolutivo.jpeg",
  highlights: [
    "Material: Algodón y poliéster",
    "Soporta: Hasta 18 kg",
    "Correas: Ajustables",
    "Altura: 70 cm",
    "Taburete: Superficie 16 x 22 cm",
    "Cintura: Circunferencia máx. 115 cm",
    "Bolsillos: 3 compartimientos auxiliares",
    "Incluye: Toallita para la cabeza"
  ]
},

{
  id: "fular-recien-nacido",
  name: "Fular para Recién Nacido",
  price: 99,
  category: "Paseo y Transporte",
  subCategory: "Complementos",
  type: "fular",
  image: "imagenes/Fular.jpeg",
  highlights: [
    "Ideal: Desde recién nacido (3.2 kg)",
    "Soporta: Hasta 20 kg",
    "Material: Tela transpirable 100% poliéster",
    "Diseño: Ergonómico tipo camiseta",
    "Ajuste: Correa regulable y segura",
    "Postura: Favorece posición natural en M",
    "Comodidad: Distribuye el peso en espalda y hombros",
    "Incluye: Manual ilustrado de uso"
  ]
},


{
  id: "mochila-calentador-termica-lactancia",
  name: "Lonchera Térmica",
  price: 69,
  category: "Paseo y Transporte",
  subCategory: "Complementos",
  type: "mochila",
  image: "imagenes/Paseo y Transporte/Mochila Termica.jpeg",
  highlights: [
    "Colores: Rosado y Azul",
    "Medidas: 30 x 17 x 25 cm",
    "Bolsillos: 5 espacios de almacenamiento",
    "Térmico: 2 bolsillos térmicos",
    "Material: Tela resistente",
    "Uso: Transporte de biberones",
    "Función: Ideal para lactancia",
    "Práctica: Para salidas y viajes"
  ]
},
{
  id: "movil-cuna-giratorio-musical",
  name: "Móvil de Cuna Giratorio Musical con 4 Juguetes",
  price: 39,
  category: "Estimulación y Juegos",
  subCategory: "Movil de Cuna y Andadores",
  type: "movil",
  image: "imagenes/Estimulación y Juegos/Movil de Cuna Giratorio y Musical.jpeg",
  highlights: [
    "Altura: 50 cm",
    "Material: Plástico",
    "Musical: Sí",
    "Giratorio: Movimiento suave",
    "Incluye: 4 juguetes colgantes",
    "Uso: Estimula visión y audición",
    "Diseño: Colores llamativos",
    "Ideal: Para cuna del bebé"
  ]
},
{
  id: "andador-musical-juguetes-interactivos",
  name: "Andador Musical con Juguetes Interactivos",
  price: 59,
  category: "Estimulación y Juegos",
  subCategory: "Movil de Cuna y Andadores",
  type: "andador",
  image: "imagenes/Estimulación y Juegos/Andador Musical.jpeg",
  highlights: [
    "Colores: Rosa",
    "Medidas: 43 x 36 x 42 cm",
    "Material: Plástico",
    "Velocidad: Ajustable",
    "Incluye: Juguetes interactivos",
    "Musical: Sí",
    "Función: Apoyo para primeros pasos",
    "Estimula: Coordinación y equilibrio"
  ]
},
{
  id: "andador-mini-gimnasio-2en1",
  name: "Andador y Mini Gimnasio 2 en 1 Musical",
  price: 79,
  category: "Estimulación y Juegos",
  subCategory: "Movil de Cuna y Andadores",
  type: "andador",
  image: "imagenes/Estimulación y Juegos/Mini Gimnasio y Andador Musical.jpeg",
  highlights: [
    "2 en 1: Andador y mini gimnasio",
    "Medidas: 39 x 43 x 34 cm",
    "Tapete: 66 cm de largo",
    "Musical: Variedad de canciones y sonidos",
    "Velocidad: Ajustable",
    "Incluye: Piano interactivo",
    "Incluye: Espejito colgante",
    "Juguetes: 4 colgantes incluidos"
  ]
},
{
  id: "mini-gimnasio-musical",
  name: "Mini Gimnasio Musical",
  price: 69,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "gimnasio",
  image: "imagenes/Estimulación y Juegos/Mini Gimnasio Musical.jpeg",
  highlights: [
    "Colores: Rosa y Celeste",
    "Medidas: 40 x 55 x 70 cm",
    "Musical: Variedad de música y sonidos",
    "Incluye: 5 juguetes colgantes",
    "Uso: Estimulación temprana",
    "Función: Desarrollo sensorial",
    "Material: Plástico resistente",
    "Ideal: Para bebés"
  ]
},
/*
{
  id: "bloques-luces-led",
  name: "Bloques con Luces LED",
  price: 79,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes",
  type: "bloques",
  image: "imagenes/Juegos/BLOQUES LUCES LED.jpeg",
  highlights: [
    "Material: Plástico ABS libre de BPA",
    "Luces: LED integradas",
    "Incluye: Pelotitas",
    "Extras: Reflectores y stickers",
    "Uso: Construcción y juego creativo",
    "Estimula: Imaginación y coordinación",
    "Diseño: Colores llamativos",
    "Ideal: Para niños pequeños"
  ]
},
*/
{
  id: "torre-bloques-madera",
  name: "Torre de Bloques de Madera",
  price: 29,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "bloques",
  image: "imagenes/Estimulación y Juegos/bloques.jpg",
  highlights: [
    "Diseños: Animales y dinosaurios",
    "Material: Madera",
    "Piezas: Distintas formas y tamaños",
    "Juego: Encajar y apilar",
    "Estimula: Coordinación y motricidad",
    "Aprendizaje: Colores y formas",
    "Resistente: Uso duradero",
    "Ideal: Para niños pequeños"
  ]
},
{
  id: "juguetes-musicales-instrumentos",
  name: "Juguetes Musicales",
  price: 19,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "juguete",
  image: "imagenes/Estimulación y Juegos/Juguete Musical.jpeg",
  highlights: [
    "Instrumentos: Guitarra, Tambor y Piano",
    "Modelos: Jirafa, León y Elefante",
    "Medidas: Variadas según instrumento",
    "Musical: Sonidos y melodías",
    "Uso: Estimulación auditiva",
    "Material: Plástico resistente",
    "Colores: Llamativos",
    "Ideal: Para juego temprano"
  ]
},
{
  id: "mordedor-oruga-baby-toys",
  name: "Mordedor Oruga Baby Toys",
  price: 18,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "mordedor",
  image: "imagenes/Estimulación y Juegos/Gusano.jpg",
  highlights: [
    "Edad: 6m+",
    "Material: Silicona + plástico",
    "Seguro: Libre de BPA",
    "Medidas: 10 x 11 x 2 cm",
    "Uso: Alivia las molestias de la dentición",
    "Diseño: Oruga con aro de fácil agarre",
    "Textura: Ideal para morder y masajear encías",
    "Colores: Llamativos y atractivos"
  ]
},
{
  id: "mordedor-sonaja-mariposa-6m",
  name: "Mordedor Sonaja Mariposa Baby Toys",
  price: 18,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "juguete",
  image: "imagenes/Estimulación y Juegos/Mordedor_Sonaja_1024x1024.jpg",
  highlights: [
    "Edad: 6 meses a más (6m+)",
    "Función: Mordedor y sonaja",
    "Material: Plástico resistente",
    "Seguro: Libre de BPA",
    "Uso: Alivia molestias de la dentición",
    "Estimulación: Sensorial y auditiva",
    "Diseño: Mariposa con texturas",
    "Colores: Llamativos y atractivos"
  ]
},
{
  id: "set-plato-vaso-bebe-azul",
  name: "Set Plato con Compartimentos + Vaso Entrenador",
  price: 18,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "set",
  image: "imagenes/Estimulación y Juegos/Set_Plato_Vaso_Bebe_1024x1024.jpg",
  highlights: [
    "Incluye: Plato con compartimentos + vaso entrenador con asas",
    "Diseño: Estampado infantil (dinosaurio y animalitos)",
    "Plato: 3 compartimentos para separar alimentos",
    "Vaso: Con asas para fácil agarre",
    "Uso: Ideal para alimentación complementaria",
    "Material: Plástico resistente",
    "Edad: 6m+",
    "Fácil: De lavar y reutilizar"
  ]
},








{
  id: "cuna-corral-bebe-aro-basket",
  name: "Cuna Corral para Bebé con Aro de Basketball",
  price: 69,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "cuna",
  image: "imagenes/Cuna Corral Basquet.jpeg",
  highlights: [
    "Medidas: 106 x 125 x 110 cm",
    "Material: Tela, malla, plástico y acero",
    "Edad recomendada: 6 meses a 4 años",
    "Incluye: Aro de basket",
    "Diseño: Corral seguro y resistente",
    "Uso: Juego y descanso",
    "Ventilación: Malla lateral",
    "No incluye: Pelotitas"
  ]
},
{
  id: "corral-bebes-3en1-canasta-arco-futbol",
  name: "Corral para Bebés 3 en 1 con Canasta y Arco de Fútbol",
  price: 119,
  category: "Estimulación y Juegos",
  subCategory: "Juguetes y Corrales",
  type: "corral",
  image: "imagenes/Corral 3 en 1 con Canasta y Arco.jpeg",
  highlights: [
    "Medidas: 105 x 122 x 230 cm",
    "Material: Acero y malla",
    "Edad recomendada: 6 meses a 5 años",
    "Puerta: Con cierre",
    "Seguridad: Vista completa 360°",
    "Incluye: 1 aro de basket",
    "Incluye: 2 arcos de fútbol",
    "No incluye: Pelotitas"
  ]
},


{
  id: "set-accesorios-cabello-3en1",
  name: "Set de Accesorios para el Cabello (3 en 1)",
  price: 15,
  category: "Accesorios",
  subCategory: "Accesorios para el cabello",
  type: "cabello",
  image: "imagenes/Accesorios/gancho.jpg",
  highlights: [
    "Incluye: Vinchas, ganchitos y colets",
    "Piezas: 5 piezas por set",
    "Sets: 3 sets incluidos",
    "Material: Suave y cómodo",
    "Diseño: Colores delicados",
    "Uso: Bebés y niñas",
    "Promo: 3x1",
    "Ideal: Uso diario o regalo"
  ]
},
{
  id: "mochila-superheroes-dc",
  name: "Mochila Superhéroes DC Comic",
  price: 20,
  category: "Accesorios",
  subCategory: "Mochilas infantiles",
  type: "mochila",
  image: "imagenes/Accesorios/comic.jpg",
  highlights: [
    "Diseños: Superman, Batman y Mujer Maravilla",
    "Medidas: 30 x 27 x 7 cm",
    "Material: Parte delantera de caucho",
    "Almacenaje: Bolsillo interior de malla",
    "Uso: Guardería o paseos",
    "Diseño: Infantil y llamativo",
    "Ligera: Fácil de llevar",
    "Ideal: Para niños pequeños"
  ]
},
{
  id: "mochila-ositos-corona",
  name: "Mochila de Ositos Tiernos con Corona",
  price: 20,
  category: "Accesorios",
  subCategory: "Mochilas infantiles",
  type: "mochila",
  image: "imagenes/Accesorios/oso.jpg",
  highlights: [
    "Diseños: Morado, Rosa y Crema",
    "Medidas: 27 x 25 x 6.5 cm",
    "Material: Parte delantera de caucho",
    "Almacenaje: Bolsillo interior de malla",
    "Diseño: Osito con corona",
    "Uso: Guardería o paseos",
    "Ligera: Fácil de llevar",
    "Ideal: Para niños pequeños"
  ]
},
{
  id: "camara-baby-monitor-proteccion",
  name: "Cámara Baby Monitor con Pantalla y Visión Nocturna",
  price: 229,
  category: "Protección",
  subCategory: "Seguridad",
  type: "camara",
  image: "imagenes/Seguridad/Camara Monitor.jpeg",
  highlights: [
    "Audio bidireccional",
    "Zoom digital x4",
    "8 canciones de cuna",
    "Detección de temperatura",
    "Recordatorio de llanto y lactancia",
    "Resolución HD 1280 x 720P",
    "Visión nocturna en blanco y negro",
    "Pantalla digital independiente"
  ]
},

{
  id: "mini-camara-espia-4g-chip",
  name: "Mini Cámara Espía 4G con Chip y Zoom Digital",
  price: 189,
  category: "Protección",
  subCategory: "Seguridad",
  type: "camara",
  image: "imagenes/Seguridad/Camara Miniespía.jpeg",
  highlights: [
    "Compatible con Chip 4G (SIM)",
    "Resolución 3 MP con zoom digital x8",
    "Detección de movimiento (alarma)",
    "Visión nocturna con 6 LEDs infrarrojos",
    "Audio con micrófono y altavoz",
    "Alcance de visión hasta 20 m",
    "Control desde app UBox",
    "Diseño mini y discreto"
  ]
},
/*
{
  id: "camara-interior-fullhd-wifi",
  name: "Cámara Interior Full HD WiFi con Sensor de Movimiento",
  price: 69,
  category: "Protección",
  subCategory: "Seguridad",
  type: "camara",
  image: "imagenes/Proteccion/camara-interior-fullhd-wifi.jpg",
  highlights: [
    "Resolución Full HD 2 MP",
    "Seguimiento y detección de movimiento",
    "Visión nocturna con 4 LEDs infrarrojos",
    "Audio bidireccional",
    "Control desde app ICSee",
    "Conectividad WiFi 2.4G",
    "Ideal para interiores",
    "Diseño compacto y moderno"
  ]
},
*/  
{
  id: "camara-seguridad-doble-lente-wifi",
  name: "Cámara de Seguridad Doble Lente WiFi Interior",
  price: 99,
  category: "Protección",
  subCategory: "Seguridad",
  type: "camara",
  image: "imagenes/Seguridad/Camara Doble.jpeg",
  highlights: [
    "Doble lente 2MP + 2MP con zoom digital x6",
    "Seguimiento y alarma con sirena",
    "Audio bidireccional (micrófono y altavoz)",
    "Visión nocturna infrarroja y a color",
    "Ideal para interiores",
    "Control desde app ICSee",
    "Videollamadas desde la app",
    "Conectividad WiFi 2.4G"
  ]
},
{
  id: "camara-imou-ranger-dual",
  name: "Cámara IMOU Ranger Dual con Detección de Llanto y Caídas",
  price: 229,
  category: "Protección",
  subCategory: "Seguridad",
  type: "camara",
  image: "imagenes/Seguridad/Ranger Dual.jpeg",
  highlights: [
    "Doble lente 5MP + 5MP con zoom digital x8",
    "Detección inteligente de llanto y caídas",
    "Audio bidireccional con sirena",
    "Visión nocturna infrarroja y LED",
    "Videollamadas y gestos con un toque",
    "Compatible WiFi 2.4G / 5G y cable de red",
    "Memoria expandible hasta 512 GB",
    "Control desde app Imou Life"
  ]
},
/*{
  id: "combo",
  name: "Combo Baño con Parante",
  price: 189,
  category: "Combos",
  subCategory: "",
  type: "camara",
  image: "imagenes/combo1.jpg",
  highlights: [
    "Toalla de Baño",
    "Regadera Electrica",
    "Gorro de Baño",
    "Bañera con Termometro + Regadera Manual + Cojín",
    "Parante de Bañera"
  ]
},
*/
{
  id: "combo",
  name: "Combo Bañera",
  price: 179,
  category: "Combos",
  subCategory: "",
  type: "camara",
  image: "imagenes/combo2.jpg",
  highlights: [
   "Toalla de Baño",
    "Regadera Electrica",
    "Gorro de Baño",
    "Bañera con Termometro",
    "Regadera Manual + Cojín"
    
  ]
},
{
  id: "combo",
  name: "Combo BabyPal",
  price: 179,
  category: "Combos",
  subCategory: "",
  type: "camara",
  image: "imagenes/combo3.jpg",
  highlights: [
   "Esterilizador de Biberones",
   "Dispensador de Formula",
   "Tetinas Pigeon",
   "Biberón de Vidrio 160ml",

  
    
  ]
},
/*{
  id: "combo",
  name: "Combo Lactancia Premium",
  price: 825,
  category: "Combos",
  subCategory: "",
  type: "camara",
  image: "imagenes/babypal_baby_sale.jpg",
  highlights: [
  
"Biberón vidrio 160ml + frascos Pigeon",
"Extractor S22 + bolsas recolectoras",
"Cuidado del pezón (lanolina, pezonera, formador)",
"Masajeador + pads de lactancia",
"Esterilizador + calentador de biberón",
"Cepillos + limpiador Pigeon",
"Lonchera térmica + almohada lactancia",
"Kit completo de lactancia"  ]
},
*/
{
  id: "combo1",
  name: "Combo Lonchera Térmica",
  price: 99,
  category: "Combos",
  subCategory: "",
  type: "lonchera",
  image: "imagenes/Combos Marzo/Combo 1.jpeg",
  highlights: [
    "Lonchera térmica (opciones de color)",
    "30 bolsitas de leche",
    "2 geles de hielo reutilizables"
  ]
},
{
  id: "combo2",
  name: "Combo Biberón Vidrio",
  price: 99,
  category: "Combos",
  subCategory: "",
  type: "biberon",
  image: "imagenes/Combos Marzo/Combo 2.jpeg",
  highlights: [
    "Biberón de vidrio 5oz",
    "Dispensador de fórmula (opciones de color)",
    "Tetina Pigeon"
  ]
},
{
  id: "combo3",
  name: "Combo Limpieza Biberón",
  price: 95,
  category: "Combos",
  subCategory: "",
  type: "biberon",
  image: "imagenes/Combos Marzo/Combo 3.jpeg",
  highlights: [
    "Limpiador Pigeon 650ml",
    "Cepillos para biberón (opciones de color)",
    "Biberón PP (5oz, 8oz o 11oz)"
  ]
},
{
  id: "comboBaneraPremium",
  name: "Combo Bañera Premium",
  price: 379,
  category: "Combos",
  subCategory: "",
  type: "banera",
  image: "imagenes/Combos Marzo/Combo Bañera Premium.jpeg",
  highlights: [
    "Bañera cambiador",
    "Regadera eléctrica",
    "Toalla (opciones de color)",
    "Kit de limpieza (opciones de color)"
  ]
},

{
  id: "comboPremium777",
  name: "Combo Premium Cuna + Bañera",
  price: 777,
  category: "Combos",
  subCategory: "",
  type: "premium",
  image: "imagenes/Combos Marzo/Combo Premium.jpeg",
  highlights: [
    "Bañera cambiador",
    "Mecedora eléctrica (opciones de color)",
    "Cuna corral 5 en 1"
  ]
},
{
  id: "comboSplash",
  name: "Combo Splash",
  price: 238,
  category: "Combos",
  subCategory: "",
  type: "banera",
  image: "imagenes/Combos Marzo/Combo Splash.jpeg",
  highlights: [
    "Bañera plegable (opciones de color)",
    "Cojín para bañera",
    "Regadera eléctrica",
    "Toalla (opciones de color)",
    "Gorro (opciones de color)",
    "Kit de limpieza (opciones de color)",
    "Organizador 3 niveles"
  ]
},
{
  id: "comboLonchera1",
  name: "Combo Lonchera 1",
  price: 149,
  category: "Combos",
  subCategory: "",
  type: "lonchera",
  image: "imagenes/Combos Marzo/Lonchera 1.jpeg",
  highlights: [
    "Lonchera térmica (opciones de color)",
    "2 geles de hielo",
    "3 frascos recolectores"
  ]
},

{
  id: "comboLonchera2",
  name: "Combo Lonchera 2",
  price: 348,
  category: "Combos",
  subCategory: "",
  type: "lonchera",
  image: "imagenes/Combos Marzo/Lonchera 2.jpeg",
  highlights: [
    "Lonchera térmica (opciones de color)",
    "Extractor eléctrico",
    "2 geles de hielo",
    "3 frascos recolectores"
  ]
},














































];
