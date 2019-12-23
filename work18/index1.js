(function () {
    function PageList(options) {
        for (var i in options) {
            this[i] = options[i];
        }
        var obj = this;
        this.first.onclick = function () {
            obj.page = 1;
            obj.onChange();
        };
        this.prev.onclick = function () {
            obj.page = (obj.page > 1) ? (obj.page - 1) : 1;
            obj.onChange();
        };
        this.next.onclick = function () {
            obj.page = (obj.page >= obj.maxPage) ? obj.maxPage : (obj.page + 1);
            obj.onChange();
        };
        this.last.onclick = function () {
            obj.page = obj.maxPage;
            obj.onChange();
        };
    }
    PageList.prototype.updateStatus = function () {
        this.frist.disabled = (this.page <= 1);
        this.prev.disabled = (this.page <= 1);
        this.next.disabled = (this.page >= this.maxPage);
        this.last.disabled = (this.page >= this.maxPage);
        this.pageNum.innerHTML = this.page;
    };

    function Comment(obj) {
        this.obj = obj;
    }
    Comment.prototype.ajax = function (url, start, complete) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.status < 200 || xhr.status >= 300 && xhr.status !== 304) {
                alert('服务器异常');
                return;
            }
            try {
                var obj = JSON.parse(xhr.responseText);
            } catch (e) {
                alert('解析服务器返回信息失败');
                return;
            }
            complete(obj);
        }
    };
    xhr.open('GET', url);
