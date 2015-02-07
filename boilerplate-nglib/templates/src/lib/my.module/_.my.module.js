angular.module('<%= config['angular.module'] %>', ['<%= config['angular.module'] %>.templates'])

/**
 * @ngdoc object
 * @name <%= config['angular.module'] %>.myServiceProvider
 *
 * @description
 * Allows configuration of the {@link <%= config['angular.module'] %>.myService} service.
 */
.provider('myService', [

    function () {
        'use strict';

        var baseUrl;

        /**
         * @type {Object} provider configuration.
         */
        var myConfig = {
            divisor: 2
        };

        /**
         * @ngdoc function
         * @name configure
         * @methodOf <%= config['angular.module'] %>.myServiceProvider
         *
         * @description
         * Configures the {@link <%= config['angular.module'] %>.myService} service.
         *
         * @param {Object} config Object with configuration options, extends base configuration.
         * - divisor {number}
         */
        this.configure = function (config) {
            angular.extend(myConfig, config);
        };

        /**
         * @ngdoc object
         * @name <%= config['angular.module'] %>.myService
         *
         * @description
         * An example service.
         *
         * @property {number} divisor **Number** *Read-only* The value of the configuratble divisor.
         * @property {boolean} rounding **Boolean** *Read/write* Set or check if rounding is on/off.
         */
        this.$get = [
            '$q',
            function ($q) {

                /**
                 * @var {boolean} rounding
                 */
                var rounding = false;

                var myService = {

                    /**
                     * @ngdoc function
                     * @name divide
                     * @methodOf <%= config['angular.module'] %>.myService
                     *
                     * @description
                     * Divide a number by the configurable *divisor* using the current *rounding* mode.
                     *
                     * @param {number} value The number to divide.
                     * @returns {number} The divided number.
                     */
                    divide: function (value) {
                        var result = value / myConfig.divisor;
                        return rounding ? Math.round(result) : result;
                    }
                };

                Object.defineProperty(myService, 'divisor', {
                    get: function () {
                        return myConfig.divisor;
                    }
                });

                Object.defineProperty(myService, 'rounding', {
                    get: function () {
                        return rounding;
                    },
                    set: function (value) {
                        rounding = !!value;
                    }
                });

                return myService;
            }
        ];
    }
])

/**
 * @ngdoc directive
 * @name <%= config['angular.module'] %>.directive:myDivision
 *
 * @description
 * An example directive that prints a division.
 *
 * @restrict A
 * @scope
 *
 * @param {number} ngModel The dividend.
 *
 * @example
  <example module="exampleApp" height="200">
    <file name="index.html">
        <div data-ng-controller="exampleCtrl">
            <form name="exampleForm">
                <div class="form-group">
                    <label>Divide this number:</label>
                    <input name="dividend" type="text" ng-model="dividend" class="form-control" />
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" ng-model="rounding" ng-click="setRounding()" /> Rounding {{rounding ? 'on' : 'off'}}
                    </label>
                </div>
                <div my-division ng-model="dividend"></div>
            </form>
        </div>
    </file>
    <file name="style.css">
        form {
            border: 1px solid black;
            padding: 10px;
        }
    </file>
    <file name="script.js">
        angular.module('exampleApp', ['<%= config['angular.module'] %>'])
        .controller('exampleCtrl', ['$scope', 'myService', function ($scope, myService) {
            $scope.rounding = myService.rounding;
            $scope.dividend = 11;
            $scope.setRounding = function () {
                myService.rounding = $scope.rounding;
            };
        }]);
    </file>
  </example>
 */
.directive('myDivision', [
    'myService',
    function myDivision(myService) {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'lib/<%= config['angular.module'] %>/my.directive.tpl.html',
            require: 'ngModel',
            scope: {
                'ngModel': '='
            },
            link: function ($scope, $element, $attrs) {
                $scope.divisor = myService.divisor;
                $scope.divide = myService.divide;
            }
        };
    }
])

/**
 * @ngdoc filter
 * @name <%= config['angular.module'] %>.filter:myDivide
 *
 * @description
 * An example filter that divides a number using a service (kind of a bad practice because the service is stateful).
 *
 * @restrict A
 * @scope
 *
 * @param {number} dividend The number to divide.
 *
 * @example
  <example module="exampleApp" height="200">
    <file name="index.html">
        <div data-ng-controller="exampleCtrl">
            <form name="exampleForm">
                <div class="form-group">
                    <label>Divide this number:</label>
                    <input name="dividend" type="text" ng-model="dividend" class="form-control" />
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" ng-model="rounding" ng-click="setRounding()"/> Rounding {{rounding ? 'on' : 'off'}}
                    </label>
                </div>
                <div>equals {{dividend | myDivide}}</div>
                <em>Note: the above expression is not re-calculated unless the input value changes.</em>
            </form>
        </div>
    </file>
    <file name="style.css">
        form {
            border: 1px solid black;
            padding: 10px;
        }
    </file>
    <file name="script.js">
        angular.module('exampleApp', ['<%= config['angular.module'] %>'])
        .controller('exampleCtrl', ['$scope', 'myService', function ($scope, myService) {
            $scope.rounding = myService.rounding;
            $scope.dividend = 11;
            $scope.setRounding = function () {
                myService.rounding = $scope.rounding;
            };
        }]);
    </file>
  </example>
 */
.filter('myDivide', [
    'myService',
    function myDivide(myService) {
        'use strict';

        return function (value) {
            return myService.divide(value);
        };
    }
])

;

