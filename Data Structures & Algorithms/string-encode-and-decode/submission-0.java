public class Solution {
  public static String encode(List<String> strs) {
    return strs.stream().map(x -> String.valueOf(x.length()) + "#" + x).collect(Collectors.joining(""));
  }

  public static List<String> decode(String str) {
    List<String> resultados = new ArrayList<>();
    int cantidadATomar = 0;
    int posAlmoadilla = 0;

    while (!str.isEmpty()) {
      posAlmoadilla = str.indexOf("#");
      cantidadATomar = Integer.parseInt(str.substring(0, posAlmoadilla));
      resultados.add(str.substring(posAlmoadilla + 1, posAlmoadilla + cantidadATomar + 1));
      str = str.substring(posAlmoadilla + cantidadATomar + 1);
    }

    return resultados;

  }

  public static void main(String[] args) {
    List<String> strs = new ArrayList<>();
    strs.add("1#caosTotal"); // Tiene 11 caracteres y empieza con un número y un '#'
    strs.add("Extra");

    System.out.println("=== ENCODE ===");
    String codificado = encode(strs);
    System.out.println("Resultado Codificado: " + codificado + "\n");

    System.out.println("=== DECODE ===");
    try {
      List<String> decodificado = decode(codificado);
      System.out.println("\nResultado Decodificado: " + decodificado);
    } catch (Exception e) {
      System.out.println("\n¡BOOM! El código falló con la siguiente excepción:");
      e.printStackTrace();
    }
  }
}
