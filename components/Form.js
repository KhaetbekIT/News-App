import { Button, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

const Form = ({ addItem }) => {
    return (
        <View>
            <Formik initialValues={{ name: "", full: "", anons: "", image: "" }} onSubmit={(values, action) => {
                addItem(values);

                action.resetForm();

            }}>
                {(props) => (
                    <View>
                        <TextInput style={styles.input} placeholder='Name' value={props.values.name} onChangeText={props.handleChange('name')} />

                        <TextInput style={styles.input} multiline placeholder='Anons' value={props.values.anons} onChangeText={props.handleChange('anons')} />

                        <TextInput style={styles.input} placeholder='Full' multiline value={props.values.full} onChangeText={props.handleChange('full')} />

                        <TextInput style={styles.input} placeholder='Image' value={props.values.image} onChangeText={props.handleChange('image')} />

                        <View style={styles.button}>
                            <Button onPress={props.handleSubmit} title='Submit' />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        borderWidth: 2,
        borderColor: "silver",
        borderRadius: 5,
        padding: 15
    },
    button: {
        paddingVertical: 15
    }
})