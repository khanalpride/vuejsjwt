<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>

                    <div class="panel-body">
                        <form v-on:submit.prevent="loginSubmit">
                            <div class="form-group" v-bind:class="{ 'has-error': errors.email }">
                                <label>Email</label>
                                <input v-model="user.email" type="email" placeholder="Enter Email" class="form-control">
                                <span v-if="errors.email">{{ errors.email[0] }}</span>
                            </div>
                            <div class="form-group" v-bind:class="{ 'has-error': errors.password }">
                                <label>Password</label>
                                <input v-model="user.password" type="password" placeholder="Enter Password" class="form-control">
                                <span v-if="errors.password">{{ errors.password[0] }}</span>
                            </div>
                            <input type="submit" class="btn btn-success" value="Login!!">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    api_token: 'uX5qaYTIpAbieN85tlH5adl485LzU4ZDEtkrZjxoN5UOGahywBqAcKZWezvk'
                },
                errors: {}
            }
        },
        ready() {
            console.log('Login ready.')
        },
        methods: {
            loginSubmit() {
                this.errors = {};

                this.$http.get('/api/user', this.user)
                    .then(this.loginSuccess, this.loginError);
            },
            loginSuccess(response) {
                console.log(response);
            },
            loginError(response) {
                console.log(response.data);
                this.errors = response.data;
            }
        }
    }
</script>
