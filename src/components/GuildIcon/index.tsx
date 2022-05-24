import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = `https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51lpm9SpsJL.png&imgrefurl=https%3A%2F%2Fwww.amazon.com.br%2FDiscordApp-com-Discord%2Fdp%2FB082VMLFY3&tbnid=vesavkIltzRTRM&vet=12ahUKEwik7puXgff3AhVjsJUCHZkCDS4QMygKegUIARDqAQ..i&docid=GqrwVFGRkFQqOM&w=512&h=512&q=discord&ved=2ahUKEwik7puXgff3AhVjsJUCHZkCDS4QMygKegUIARDqAQ`;

  return (

    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )

}