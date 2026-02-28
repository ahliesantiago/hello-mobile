import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

type ListItem = {
  id: number;
  text: string;
  editing?: boolean;
};

export default function Index() {
  const [value, setValue] = useState("");
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const inputRef = useRef<TextInput | null>(null);

  const addListItem = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    const newListItem: ListItem = { id: nextId, text: trimmed };
    setListItems((s) => [newListItem, ...s]);
    setNextId((n) => n + 1);
    setValue("");
    inputRef.current?.blur();
  };

  const deleteListItem = (id: number) => {
    setListItems((s) => s.filter((it) => it.id !== id));
  };

  const startEdit = (id: number) => {
    setListItems((s) => s.map((it) => (it.id === id ? { ...it, editing: true } : it)));
  };

  const saveEdit = (id: number, newText: string) => {
    const trimmed = newText.trim();
    if (!trimmed) {
      // If user clears text, treat as delete
      deleteListItem(id);
      return;
    }
    setListItems((s) => s.map((it) => (it.id === id ? { ...it, text: trimmed, editing: false } : it)));
  };

  const cancelEdit = (id: number) => {
    setListItems((s) => s.map((it) => (it.id === id ? { ...it, editing: false } : it)));
  };

  const renderListItem = ({ item }: { item: ListItem }) => {
    return (
      <View className="flex flex-row items-center justify-between py-3">
        <View className="flex-1 ps-1">
          {item.editing ? (
            <TextInput
              className="border border-gray-300 text-lg rounded-md px-3 py-2"
              defaultValue={item.text}
              onSubmitEditing={(e) => saveEdit(item.id, e.nativeEvent.text)}
              blurOnSubmit
              autoFocus
            />
          ) : (
            <Text style={styles.itemText} className="text-lg">{item.text}</Text>
          )}
        </View>

        <View className="flex flex-row items-center">
          {item.editing ? (
            <>
              <TouchableOpacity
                accessibilityLabel={`Save ${item.text}`}
                onPress={() => saveEdit(item.id, item.text)}
                style={styles.iconButton}
              >
                <FontAwesome5 name="save" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityLabel={`Cancel editing ${item.text}`}
                onPress={() => cancelEdit(item.id)}
                style={styles.iconButton}
              >
                <Feather name="x-circle" size={24} color="black" />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                accessibilityLabel={`Edit ${item.text}`}
                onPress={() => startEdit(item.id)}
                style={styles.iconButton}
              >
                <Feather name="edit-3" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityLabel={`Delete ${item.text}`}
                onPress={() => deleteListItem(item.id)}
                style={styles.iconButton}
              >
                <FontAwesome5 name="trash-alt" size={24} color="black" />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white p-6"
    >
      <Text className="text-3xl font-semibold mb-4 text-slate-800 rounded-lg">
        Create a new list?
      </Text>

      <View className="flex flex-row items-center mb-4">
        <TextInput
          ref={inputRef}
          className="flex flex-1 border border-gray-300 text-lg p-3"
          placeholder="Enter list name"
          value={value}
          onChangeText={setValue}
          onSubmitEditing={addListItem}
          returnKeyType="done"
        />

        <TouchableOpacity
          onPress={addListItem}
          className="ms-2 bg-sky-500 rounded-lg py-3 px-4 items-center justify-center"
          accessibilityLabel="Create a list"
        >
          <Text className="font-bold text-2xl text-white">+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listItems}
        keyExtractor={(i) => String(i.id)}
        renderItem={renderListItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>No lists yet — add one above.</Text>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
  },
  iconButton: {
    marginLeft: 8,
    padding: 6,
  },
  separator: {
    height: 1,
    backgroundColor: "#f3f4f6",
  },
  empty: {
    color: "#6b7280",
    paddingTop: 12,
  },
});
