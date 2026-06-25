public class Solution {
  public static List<List<String>> groupAnagrams(String[] strs) {
    HashMap<String, List<String>> gruposAnagramas = new HashMap<>();

    for (String palabra : strs) {

      char[] caracteres = palabra.toCharArray();
      Arrays.sort(caracteres);
      String palabraOrdenada = new String(caracteres);

      if (!gruposAnagramas.containsKey(palabraOrdenada)) {
        ArrayList<String> lista = new ArrayList<>();
        lista.add(palabra);
        gruposAnagramas.put(palabraOrdenada, lista);
      } else {
        gruposAnagramas.get(palabraOrdenada).add(palabra);
      }
    }

    return new ArrayList<>(gruposAnagramas.values());

  }

  public static void main(String[] args) {
    String[] strs = { "act", "pots", "tops", "cat", "stop", "hat" };
    System.out.println(groupAnagrams(strs));
  }
}
