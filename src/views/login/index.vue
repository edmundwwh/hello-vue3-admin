<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="count">
        <el-input
          v-model="ruleForm.count"
          type="text"
          autocomplete="off"
          placeholder="请输入账号"
          clearable
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
          clearable
          show-password
        />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <el-input
          v-model.number="ruleForm.verifyCode"
          placeholder="请输入验证码"
          clearable
          maxlength="6"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  password: '',
  count: '',
  verifyCode: ''
})

// 密码验证规则
const REGEXP_PWD =
  /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/

//校验码延展规则
const REGEXP_SIX = /^\d{6}$/

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (!REGEXP_PWD.test(value)) {
    callback(new Error('密码格式不对'))
  } else {
    callback()
  }
}

const validatePassVerifyCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (!REGEXP_SIX.test(value)) {
    callback(new Error('验证码错误'))
  } else {
    callback()
  }
}

const rules = reactive({
  count: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, validator: validatePassword, trigger: 'blur' }],
  verifyCode: [
    { required: true, validator: validatePassVerifyCode, trigger: 'blur' }
  ]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="less" scoped></style>
