create schema gitMusic_db;

use gitMusic_db;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(180) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `admin` boolean NOT NULL,
  `imagen` varchar(180),
  PRIMARY KEY (`id`)
  );
    
  CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(180) NULL,
  PRIMARY KEY (`id`)
  );
  
  CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `discount` INT,
  `price` decimal NOT NULL,
  `category` INT not null,
  `imagen` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`category`) REFERENCES categories(id)
  );
  
  CREATE TABLE `orders`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(1),
  `coments` VARCHAR(200),
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`users_id`) REFERENCES users(id)
  );
  
  CREATE TABLE IF NOT EXISTS `orders_has_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES products(id),
    FOREIGN KEY (`order_id`) REFERENCES orders(id)
    );

	insert into categories (name, description) values ('Guitarras', '');
	insert into categories (name, description) values ('Baterías', '');
	insert into categories (name, description) values ('Bajos', '');
	insert into categories (name, description) values ('Amplificadores', '');
	insert into categories (name, description) values ('Saxofones', '');
	insert into categories (name, description) values ('Teclados', '');
    
	insert into products (name, description, discount, price, category, imagen) values ('Bateria Tama','22″x16″ Bombo, 10″x7″ & 12″x8″ Toms, 16″x15″ Tom de pie & 14″x5″ Redoblante.',15,1499,2,'tamaDrum.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Guitarra Fender','Esta Stratocaster es el máximo referente de las guitarras a lo largo de su historia. Cuenta con pastillas que incluyen selectores, tonos y volumen máster. Tiene un sonido cálido, cristalino, percusivo y con mucha textura. Su forma hace que sea el modelo que más se adapta al cuerpo humano, lo que otorga mayor versatilidad en su uso.',30,1999,1,'fenderGuitar.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Bajo Fender','Fender ha actualizado la exitosa American Professional Series 2020 - The American Professional 2 con numerosas y útiles mejoras en los detalles: electrónica revisada con las nuevas pastillas V-Mod II, un perfil de mástil más cómodo, transición inclinada mástil-cuerpo para alcanzar sin esfuerzo grandes alturas y hardware de alta calidad. Visualmente, Fender también ha hecho algunos cambios: Fender ofrece varios acabados de pintura de nuevo desarrollo que convierten a cada instrumento en un verdadero atractivo.',10,1999,3,'bajoFender.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Yamaha F335 Acústica Guitarra Negra','Sus características de construcción hacen una guitarra que suena mejor, es más cómoda de tocar y tiene una estética más atractiva que la mayoría de las guitarras de precio similar. Entre dichas características destacan el acabado en poliuretano ultrafino, tapa de picea, costados y tapa posterior de nato, clavijero de alta calidad, y un sistema de pastilla piezoeléctrica y preamplificador que confiere naturalidad al sonido electrificado.',null,999,1,'yamahaAcustica.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('Gibson ES-339 Guitarra Electrica Blueberry Burst','La Gibson ES-339 es un clásico moderno diseñado para aquellos que buscan el tono y el aspecto de una ES-335, pero quieres un instrumento ligeramente más pequeño y liviano. El diapasón de palisandro con incrustaciones a puntos perla en un mástil de caoba "C" enrollado a mano recuerda a los viejos tiempos.',null,3999,1,'guitarraGibson.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Fender Vintage Amplificador 65','Si lo que estás buscando es un equipo que se caracterice por tener una distorsión única y mayor calidez de sonidos clásicos y orgánicos, este amplificador valvular es ideal para vos.',null,1500,4,'amplificadorFender.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Marshall Amplificador 40W 1x12 Guitar','Este amplificador cuenta con un conector de entrada tipo Jack 1/4", Jack 3.5 mm, lo que te asegurará tener buena calidad cuando hagas una grabación o una transmisión. Además, cuenta con un conector de salida tipo Jack 1/4" ideado para que minimices cualquier ruido en la conexión.',null,1000,4,'amplificadorMarshall.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Bateria Electronica Alesis Set','El Alesis Set es un completo kit de batería electrónica de 7 piezas centrado en la tecnología de tambor de cabeza Alesismesh de próxima generación. Los parches de malla son la preferencia abrumadora de los bateristas cuando tocan kits electrónicos debido a su sensación natural y su respuesta ultra silenciosa.',null,1399,2,'bateriaElectricaAlesis.webp');
	insert into products (name, description, discount, price, category, imagen) values ('TAMA Metalworks Redoblante 14 x 6.5','Esta caja de acero tiene un tono brillante con una nitidez perfecta en afinaciones altas y una resonancia suave en ajustes bajos. Un casco en acabado de acero negro mate de 1,2 mm. El color del hardware del casco esta acabado a juego con el casco.',null,299,2,'redoblanteTama.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('DW Redoblante 14 x 6.5','Tambor de latón de 6.5 x 14.0 in con carcasa de 0.039 in y aros de triple brida de 0.118 in.',null,499,2,'redoblanteDw.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Ibanez SR405EPBDX 5-Cuerdas Bajo Electrico','Desde 1987, los músicos de todo el mundo han llegado a conocer la comodidad de tocar y el sonido único de la línea Sr. El SR405EPBDX bajo eléctrico de 5 cuerdas cae en la categoría de instrumentos asequibles y de alta calidad de Ibanez.',null,599,3,'bajoIbanez.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('Ibanez SR405EPBDX 5-Cuerdas Bajo Electrico Azul','El Ibanez SR405EPBDX es un bajo eléctrico de 5 cuerdas con una parte superior de álamo/cuerpo de Nyatoh y un cuello de arce y nogal de 5 piezas. El cuello de arce y nogal de 5 piezas proporciona claridad tonal y ataque superior. El diapasón Jatoba tiene un color marrón rojizo y produce un rico rango medio con una gama alta nítida',null,699,3,'bajoIbanezBlue.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Taylor GS Bajo Acoustico-Electrico','El Taylor GS Bajo Acoustico-Electrico ofrece a los jugadores un bajo acústico notablemente atractivo que es compacto, liviano y ultra cómodo en las manos. Este año traemos un nuevo modelo a la mezcla, con aros y aros en capas ricamente decorados.',null,749,3,'bajoAcusticoTaylor.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Yamaha Saxofón','Un instrumento perfecto para intérpretes principiantes e intermedios, este modelo combina la maestría en los procesos de fabricación de Yamaha con detalles de diseño de los modelos profesionales, dando como resultado un saxo de respuesta inmediata, afinación precisa y excelente cuerpo de sonido.',null,2999,5,'yamahaSaxo.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('Allora Saxofón Tenor Silver','Este instrumento pertenece a la gama para estudiantes. Este saxofon tenor se caracteriza por tener un sonido más autoritario, mayor resistencia y una gran flexibilidad en todo su registro.',null,2999,5,'alloraSaxo.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Nord Teclado Rojo','El teclado Clavia Nord Electro 6D 61 combina las emulaciones de los instrumentos electromecánicos y acústicos clásicos en una carcasa ultraportátil. Con 3 secciones de sonido independientes, una interfaz de usuario optimizada y la adición de Seamless Transitions, el fabricante sueco presenta un instrumento potente y flexible.',null,4999,6,'tecladoNord.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Teclado Yamaha CP88','El Yamaha CP88 representa la evolución definitiva del piano de escenario con una portabilidad mejorada, facilidad de uso, y sonido de última generación. El CP88 pone todo junto, con sonidos auténticos de pianos acústicos y eléctricos, un toque responsivo de piano y una interfaz de usuario intuitiva.',null,2699,6,'tecladoYamaha.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Vox Continentall Teclado','Es un teclado esbelto, de 73 notas, con especificaciones para hoy en día y características optimizadas para la performance en vivo. El toque es tope de gama, con un arsenal de presets de gran sonido incluyendo pianos acústicos y eléctricos, cuerdas, y por supuesto órgano al alcance de tus dedos para llamarlos instantáneamente en el escenario o el estudio.',null,1699,6,'voxContinentallTeclado.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('DW Collectors 4 piezas Batería','Se trata de una batería DW en todos los sentidos. Ningún detalle se ha pasado por alto, no se han cortado esquinas. Su aspecto y sonido son decididamente DW. Inspirado en la costumbre, con un nuevo gancho de la torreta de la cuarta torreta, el gancho bajo de la garra de la masa baja, la insignia nueva, la cabeza del logotipo y su opción de 4 aerosol pulverizado.',null,3999,2,'dwCollectorsDrum.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Ludwing Clásica Maple Bateria','Preferidos por profesionales por su versatilidad tonal, los tambores Classic Maple son la opción ideal para cualquier aplicación de rendimiento. Su alta sensibilidad, amplio rango de sintonización dinámica y ataque agudo lo convierten en la opción ideal para actuaciones en vivo.',null,2599,2,'ludwingBateria.webp');
    
    
	insert into users(first_name,last_name,email,password,admin) values('guido','papa rua','guidopaparua@gitmusic.com','guido',1);
	insert into users(first_name,last_name,email,password,admin) values('juan','grasso','juangrasso@gitmusic.com','juan',1);
	insert into users(first_name,last_name,email,password,admin) values('monica','reyes','monicareyes@gitmusic.com','monica',1);
	insert into users(first_name,last_name,email,password,admin) values('santiago','hamwee','santiagohamwee@gitmusic.com','santiago',1);
	insert into users(first_name,last_name,email,password,admin) values('lucas','seijas','lucasseijas@gitmusic.com','lucas',1);
  insert into users(first_name,last_name,email,password,admin) values('usuario','prueba','usuarioprueba@gmail.com','usuario',0);
    
    
    
    
    
    
    
    
    