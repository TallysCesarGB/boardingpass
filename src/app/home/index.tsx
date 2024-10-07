import { Text, View, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";

import { styles } from "./style";

import Flight from "@/components/flight";
import Details from "@/components/details";
import { colors } from "@/styles/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@/assets/main-bk.jpeg")}
      >
        <Text style={styles.title}>Cartão de Embarque</Text>
        <Text style={styles.subtitle}>
          Faltam um monte de dias para a sua viagem
        </Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="Pau dos Ferros" value="GRU" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={24} color={colors.black} />
              <Text style={styles.hours}>19 h 30 min</Text>
            </View>
            <Flight label="Encanto" value="ECM" />
          </View>
          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Pikachu Morais Arrascaeta</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Details label="Data" value="01 de abr." />
              <Details label="Embarque" value="00:00" />
            </View>
          </View>
        </View>

        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={1}
              strokeDasharray={[10, 5]}
            />
            <Circle cy="50%" r="8" cx="100%" fill={colors.black} />
            <Circle cx="0%" cy="50%" r="8" fill={colors.black} />
          </Svg>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Details label="Voo" value="TC 007" />
              <Details label="Assento" value="99T" />
            </View>
            <View style={styles.inline}>
              <Details label="Terminal" value="4" />
              <Details label="Portão" value="8" />
            </View>
          </View>
          <QRCode value="Flamengo, maior do mundo" size={150} />
        </View>
      </View>
    </View>
  );
}
