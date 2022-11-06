create schema gitMusic_db;

use gitMusic_db;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(180) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `admin` boolean NOT NULL,
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
  `description` VARCHAR(180) NOT NULL,
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
    
	insert into products (name, description, discount, price, category, imagen) values ('Batería Tama','.',15,1499,2,'/images/products/tamaDrum.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Guitarra Fender','.',30,1999,1,'/images/products/fenderGuitar.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Bajo Fender','.',10,1999,3,'/images/products/bajoFender.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Yamaha F335 Acústica Guitarra Negra','.',null,999,1,'/images/products/yamahaAcustica.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('Gibson ES-339 Guitarra Electrica Blueberry Burst','.',null,3999,1,'/images/products/guitarraGibson.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Fender Vintage Amplificador 65','.',null,1500,4,'/images/products/amplificadorFender.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Marshall Amplificador 40W 1x12 Guitar','.',null,1000,4,'/images/products/amplificadorMarshall.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Bateria Electronica Alesis Set','.',null,1399,2,'/images/products/bateriaElectricaAlesis.webp');
	insert into products (name, description, discount, price, category, imagen) values ('TAMA Metalworks Redoblante 14 x 6.5','.',null,299,2,'/images/products/redoblanteTama.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('DW Redoblante 14 x 6.5','.',null,499,2,'/images/products/redoblanteDw.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Ibanez SR405EPBDX 5-Cuerdas Bajo Electrico','.',null,599,3,'/images/products/bajoIbanez.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('Ibanez SR405EPBDX 5-Cuerdas Bajo Electrico Azul','.',null,699,3,'/images/products/bajoIbanezBlue.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Taylor GS Bajo Acoustico-Electrico','.',null,749,3,'/images/products/bajoAcusticoTaylor.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Yamaha Saxofón','.',null,2999,5,'/images/products/yamahaSaxo.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('Allora Saxofón Tenor','.',null,2999,5,'/images/products/alloraSaxo.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Nord Teclado Rojo','.',null,4999,6,'/images/products/tecladoNord.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Yamaha Teclado','.',null,2699,6,'/images/products/tecladoYamaha.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Vox Continentall Teclado','.',null,1699,6,'/images/products/voxContinentallTeclado.jpg');
	insert into products (name, description, discount, price, category, imagen) values ('DW Collectors 4 piezas Batería','.',null,3999,2,'/images/products/dwCollectorsDrum.webp');
	insert into products (name, description, discount, price, category, imagen) values ('Ludwing Clásica Maple Bateria','.',null,2599,2,'/images/products/ludwingBateria.webp');
    
    
	insert into users(first_name,last_name,email,password,admin) values('guido','papa rua','guidopaparua@gitmusic.com','guido',1);
	insert into users(first_name,last_name,email,password,admin) values('juan','grasso','juangrasso@gitmusic.com','juan',1);
	insert into users(first_name,last_name,email,password,admin) values('monica','reyes','monicareyes@gitmusic.com','monica',1);
	insert into users(first_name,last_name,email,password,admin) values('santiago','hamwee','santiagohamwee@gitmusic.com','santiago',1);
	insert into users(first_name,last_name,email,password,admin) values('lucas','seijas','lucasseijas@gitmusic.com','lucas',1);
  insert into users(first_name,last_name,email,password,admin) values('usuario','prueba','usuarioprueba@gmail.com','usuario',0);
    
    
    
    
    
    
    
    
    